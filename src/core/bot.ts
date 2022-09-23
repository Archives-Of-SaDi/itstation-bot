import { Bot, webhookCallback, serve } from '../packages/index.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

const bot = new Bot(Deno.env.get('BOT_TOKEN')!);
const handleUpdate = webhookCallback(bot, 'std/http');

Deno.env.get('MODE') === 'development' && bot.start();
Deno.env.get('MODE') === 'production' && serve(async (req) => {
  if (req.method == 'POST') {
    const url = new URL(req.url);
    if (url.pathname.slice(1) == bot.token) {
      try {
        return await handleUpdate(req);
      } catch (err) {
        console.error(err);
      }
    }
  }
  return new Response();
});

export { bot };
