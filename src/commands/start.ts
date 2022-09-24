import { bot } from '../core/index.ts';
import { startKeyboard } from '../utils/keyboards.ts';

bot.command('start', ctx => {
  const firstName = ctx.from!.first_name;
  const lastName = ctx.from?.last_name || '';

  ctx.reply(
    `<b>Assalom alaykum</b> ${
      firstName + ' ' + lastName
    }\nIT Station botiga Hush kelibsiz!`,
    { parse_mode: 'HTML', reply_markup: startKeyboard }
  );
});

bot.hears('Kursga yozilish 👨‍🎓', ctx => {
  const courseType = ctx.session.courseType;
  
  if(courseType) return ctx.reply('Siz kursga yozilib bo\'lgansiz');
  ctx.reply('Ism Familiyangizni kiriting!\nMisol: Sayidulloh Abbasov');
  ctx.session.step = 'admission';
});