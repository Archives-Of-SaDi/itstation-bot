import { bot } from '../core/index.ts';
import { backend } from '../controllers/index.ts';

bot.hears('Backend ⚙️', backend);
