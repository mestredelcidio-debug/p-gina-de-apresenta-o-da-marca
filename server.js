import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';

const distPath = path.resolve(__dirname, 'dist');
const indexPath = path.join(distPath, 'index.html');

// Health check endpoint for uptime monitors and hosting platforms
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok', brand: 'DELXUS', timestamp: new Date().toISOString() });
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
      'A aplicação DELXUS ainda não foi compilada. Execute `npm run build` para gerar a pasta dist.'
    );
  });
}

const server = app.listen(Number(PORT), HOST, () => {
  console.log(`[DELXUS] Servidor de produção ativo em http://${HOST}:${PORT}`);
  console.log(`[DELXUS] Servindo arquivos da pasta: ${distPath}`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('[DELXUS] Recebido SIGTERM, encerrando servidor...');
  server.close(() => {
    console.log('[DELXUS] Servidor encerrado.');
    process.exit(0);
  });
});

process.on('SIGINT', () => {
  console.log('[DELXUS] Recebido SIGINT, encerrando servidor...');
  server.close(() => {
    console.log('[DELXUS] Servidor encerrado.');
    process.exit(0);
  });
});
