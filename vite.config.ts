import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import crypto from 'crypto';

function metaConversionsPlugin(): Plugin {
  const META_PIXEL_ID = process.env.META_PIXEL_ID || '1445098570828605';
  const META_ACCESS_TOKEN =
    process.env.META_CONVERSIONS_API_ACCESS_TOKEN ||
    'EAAWJztiFrg8BSlprNZBXEV0SBdAx6i7pDLllpUPzVbnxL8RO4oyG3tMpZAcCfdJXW64SRq7rjtexF88zPuBsNgzGv4piL3gfyuyn7kW38TaRrjSx5VzhbQPjUnQNvW3XonGZCpOKtcCG1WxDIPGWlcWQy4VtencZCVocZAoRZAlmbvo3TqQy2XWMcbxwZBCksTsmgZDZD';

  return {
    name: 'meta-conversions-plugin',
    configureServer(server) {
      server.middlewares.use('/api/conversions', async (req, res) => {
        if (req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const { eventName, eventId, eventTime, eventSourceUrl, userData = {}, customData = {} } = data;

              const formattedUserData: Record<string, any> = {
                client_user_agent: userData.userAgent || req.headers['user-agent'] || '',
              };
              if (userData.fbp) formattedUserData.fbp = userData.fbp;
              if (userData.fbc) formattedUserData.fbc = userData.fbc;
              if (userData.email) {
                formattedUserData.em = [crypto.createHash('sha256').update(userData.email.trim().toLowerCase()).digest('hex')];
              }
              if (userData.name) {
                formattedUserData.fn = [crypto.createHash('sha256').update(userData.name.trim().toLowerCase()).digest('hex')];
              }

              const payload = {
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

              const response = await fetch(`https://graph.facebook.com/v21.0/${META_PIXEL_ID}/events?access_token=${META_ACCESS_TOKEN}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
              });
              const json = await response.json();
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = response.ok ? 200 : 400;
              res.end(JSON.stringify({ success: response.ok, meta_response: json }));
            } catch (err: any) {
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err.message }));
            }
          });
        } else {
          res.statusCode = 405;
          res.end('Method Not Allowed');
        }
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), metaConversionsPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
