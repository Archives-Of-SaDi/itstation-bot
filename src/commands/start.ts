import { bot } from '../core/index.ts';
import { mainKeyboard, cancel } from '../utils/keyboards.ts';

bot.command('start', async (ctx) => {
  const firstName = ctx.from!.first_name;
  const lastName = ctx.from?.last_name || '';

  await ctx.reply(
    `<b>Assalom alaykum</b> ${
      firstName + ' ' + lastName
    }\nIT Station botiga Hush kelibsiz!`,
    { parse_mode: 'HTML', reply_markup: mainKeyboard }
  );
});