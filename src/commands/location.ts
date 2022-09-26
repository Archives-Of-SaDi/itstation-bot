import { bot } from '../core/bot.ts';
import { location } from '../utils/keyboards.ts';

bot.hears('Lokatsiya 📍', async (ctx) => {
  await ctx.reply('Lokatsiyani yuboring', {
    reply_markup: location,
  });
  // await ctx.reply(
  //   "Manzil: Andijon shahar, Boburshox ko'chasi,\nSakura o'quv markazi yonida"
  // );
});
