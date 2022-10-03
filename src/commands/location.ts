import { bot } from '../core/bot.ts';
import { mainKeyboard } from '../utils/keyboards.ts';

bot.hears('Lokatsiya 📍', async (ctx) => {
  await ctx.replyWithLocation(40.753598, 72.357803, {
    reply_markup: mainKeyboard,
  });
  await ctx.reply(
    "Manzil: Andijon shahar, Boburshox ko'chasi,\nAtlant binosi 3-qavat"
  );
});
