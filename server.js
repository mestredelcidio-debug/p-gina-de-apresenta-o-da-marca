import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import crypto from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

app.use(express.json());

const META_PIXEL_ID = process.env.META_PIXEL_ID || '1445098570828605';
const META_ACCESS_TOKEN =
  process.env.META_CONVERSIONS_API_ACCESS_TOKEN ||
  'EAAWJztiFrg8BSlprNZBXEV0SBdAx6i7pDLllpUPzVbnxL8RO4oyG3tMpZAcCfdJXW64SRq7rjtexF88zPuBsNgzGv4piL3gfyuyn7kW38TaRrjSx5VzhbQPjUnQNvW3XonGZCpOKtcCG1WxDIPGWlcWQy4VtencZCVocZAoRZAlmbvo3TqQy2XWMcbxwZBCksTsmgZDZD';

const distPath = path.resolve(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Helper to hash user data with SHA-256 for Meta Conversions API
function hashValue(value) {
  if (!value || typeof value !== 'string') return undefined;
  const normalized = value.trim().toLowerCase();
  return crypto.createHash('sha256').update(normalized).digest('hex');
}

// Health check endpoint for uptime monitors and hosting platforms
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', brand: 'DECIX GAMERS', timestamp: new Date().toISOString() });
});

// Meta Conversions API (CAPI) server proxy endpoint
app.post('/api/conversions', async (req, res) => {
  try {
    const { eventName, eventId, eventTime, eventSourceUrl, userData = {}, customData = {} } = req.body;

    if (!eventName) {
      return res.status(400).json({ error: 'Missing eventName' });
    }

    // Extract client IP & User-Agent
    const clientIp =
      req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
      req.socket.remoteAddress ||
      '';

    const clientUserAgent =
      userData.userAgent ||
      req.headers['user-agent'] ||
      '';

    const formattedUserData = {
      client_ip_address: clientIp,
      client_user_agent: clientUserAgent,
    };

    if (userData.fbp) formattedUserData.fbp = userData.fbp;
    if (userData.fbc) formattedUserData.fbc = userData.fbc;
    if (userData.email) {
      const hashedEmail = hashValue(userData.email);
      if (hashedEmail) formattedUserData.em = [hashedEmail];
    }
    if (userData.name) {
      const hashedName = hashValue(userData.name);
      if (hashedName) formattedUserData.fn = [hashedName];
    }

    const eventPayload = {
      data: [
        {
          event_name: eventName,
          event_time: eventTime || Math.floor(Date.now() / 1000),
          event_id: eventId,
          event_source_url: eventSourceUrl || req.headers.referer || 'https://decixgamers.com/',
          action_source: 'website',
          user_data: formattedUserData,
          custom_data: customData,
        },
      ],
    };

    const graphApiUrl = `https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`;

    const fbResponse = await fetch(graphApiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(eventPayload),
    });

    const result = await fbResponse.json();

    return res.status(fbResponse.ok ? 200 : 400).json({
      success: fbResponse.ok,
      meta_response: result,
    });
  } catch (error) {
    return res.status(500).json({
      error: 'Internal Conversions API Error',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
});

// Serve static assets from the dist folder with cache control
if (fs.existsSync(distPath)) {
  app.use(
    express.static(distPath, {
      maxAge: '1d',
      setHeaders: (res, filePath) => {
        // Cache hashed assets longer, HTML files should not be cached aggressively
        if (filePath.endsWith('.html')) {
          res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
        } else if (filePath.match(/\.(js|css|png|jpg|jpeg|svg|webp|woff2?)$/)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      },
    })
  );

  // Fallback to index.html for React SPA client-side routing
  app.get('*', (_req, res) => {
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(500).send('Arquivo index.html não encontrado na pasta dist. Execute `npm run build`.');
    }
  });
} else {
  // Helpful fallback if server is started before build
  app.get('*', (_req, res) => {
    res.status(503).send(
      'A aplicação DECIX GAMERS ainda não foi compilada. Execute `npm run build` para gerar a pasta dist.'
    );
  });
}

const server = app.listen(Number(PORT), HOST, () => {
  console.log(`[DECIX GAMERS] Servidor de produção ativo em http://${HOST}:${PORT}`);
  console.log(`[DECIX GAMERS] Servindo arquivos da pasta: ${distPath}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('[DECIX GAMERS] Recebido SIGTERM, encerrando servidor...');
  server.close(() => {
    console.log('[DECIX GAMERS] Servidor encerrado.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('[DECIX GAMERS] Recebido SIGINT, encerrando servidor...');
  server.close(() => {
    console.log('[DECIX GAMERS] Servidor encerrado.');
    process.exit(0);
  });
});
