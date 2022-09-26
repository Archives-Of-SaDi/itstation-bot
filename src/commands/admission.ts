import { bot } from '../core/bot.ts';
import { cancel } from '../utils/keyboards.ts';

bot.hears('Kursga yozilish 👨‍🎓', async (ctx) => {
  const courseType = ctx.session.courseType;

  await ctx.reply('Ism Familiyangizni kiriting!\nMisol: Sayidulloh Abbasov', {
    reply_markup: cancel,
  });
  ctx.session.step = 'admission';
});
