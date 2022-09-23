import { bot } from '../core/index.ts';
import { start } from '../controllers/index.ts';

bot.command('start', start);
