import { bot } from '../core/bot.ts';
import { mainKeyboard } from '../utils/keyboards.ts';

bot.callbackQuery('true', async (ctx) => {
  await ctx.editMessageText(
    'Kursga muvaffaqiyatli yozildingiz!\nTez orada operatorlarimiz siz bilan bog\'lanishadi',
  );
  await ctx.reply('Kerakli bo\'limni tanlang', { reply_markup: mainKeyboard });
});

bot.callbackQuery('false', async (ctx) => {
  await ctx.answerCallbackQuery({
    text: 'You were curious, indeed!',
  });
});
