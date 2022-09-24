import { bot } from '../core/bot.ts';
import { startKeyboard } from '../utils/keyboards.ts';

bot.callbackQuery("true", async (ctx) => {
  await ctx.editMessageText("Kursga muvaffaqiyatli yozildingiz!\nTez orada operatorlarimiz siz bilan bog'lanishadi");
  await ctx.reply('Kerakli bo\'limni tanlang', { reply_markup: startKeyboard });
});

bot.callbackQuery("false", async (ctx) => {
  await ctx.answerCallbackQuery({
    text: "You were curious, indeed!",
  });
});