import { bot } from '../core/index.ts';
import { coursesKeyboard } from '../utils/keyboards.ts';

bot.hears('Kurslar haqida 📃', async (ctx) => {
  await ctx.reply("O'zingizga kerakli kursni tanlang", {
    reply_markup: coursesKeyboard,
  });
  ctx.session.step = 'aboutCourses';
});
