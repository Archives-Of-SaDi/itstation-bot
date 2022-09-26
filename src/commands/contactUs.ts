import { bot } from '../core/bot.ts';
import { mainKeyboard } from '../utils/keyboards.ts';

bot.hears('Biz bilan bog\'lanish 📞', async (ctx) => {
  await ctx.reply('Tel: +998 93 212 00 11\nTelegram: @Itstation_admin1');
});
