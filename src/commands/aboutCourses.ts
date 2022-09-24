import { bot } from '../core/index.ts';
import { coursesKeyboard } from '../utils/keyboards.ts';

bot.hears('Kurslar haqida 📃', (ctx) => {
  ctx.reply('O\'zingizga kerakli kursni tanlang', {
    reply_markup: coursesKeyboard,
  });
});
