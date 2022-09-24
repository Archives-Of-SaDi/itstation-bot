import { bot } from '../core/bot.ts';
import { mainKeyboard } from '../utils/keyboards.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

bot.callbackQuery('true', async (ctx) => {
  await ctx.api.sendMessage(Deno.env.get('ADMIN')!, `Ism: ${ctx.session.name}\nManzili: ${ctx.session.address}\nTelefon raqam: ${ctx.session.phoneNumber}, ${ctx.session.phoneNumber2}\nKurs: ${ctx.session.courseType}`);
  await ctx.editMessageText(
    'Kursga muvaffaqiyatli yozildingiz!\nTez orada operatorlarimiz siz bilan bog\'lanishadi',
  );
  await ctx.reply('Kerakli bo\'limni tanlang', { reply_markup: mainKeyboard });
});

bot.callbackQuery('false', async (ctx) => {
  ctx.session.step = 'admission';
  await ctx.editMessageText('Ism Familiyangizni kiriting!\nMisol: Sayidulloh Abbasov');
});
