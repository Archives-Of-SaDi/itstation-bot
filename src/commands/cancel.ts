import { bot } from '../core/bot.ts';
import { mainKeyboard } from '../utils/keyboards.ts';

bot.hears('Bekor qilish!', async (ctx) => {
  await ctx.reply("Kerakli bo'limni tanlang", { reply_markup: mainKeyboard });
});
