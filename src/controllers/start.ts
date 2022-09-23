import { Context, NextFunction } from '../packages/index.ts';
import { startKeyboard } from '../utils/keyboards.ts';

function start(ctx: Context, next: NextFunction) {
  const firstName = ctx.from!.first_name;
  const lastName = ctx.from?.last_name || '';

  ctx.reply(
    `<b>Assalom alaykum</b> ${
      firstName + ' ' + lastName
    }\nIT Station botiga Hush kelibsiz!`,
    { parse_mode: 'HTML', reply_markup: startKeyboard }
  );
  next();
}

export { start };
