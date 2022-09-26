import { bot } from '../core/index.ts';
import { mainKeyboard } from '../utils/keyboards.ts';

bot.hears('Chegirmalar 🟢', async (ctx) => {
  await ctx.reply(
    `<b>Chegirmalarimiz🤩</b>\nAgarda siz guruhning eng faol o'quvchisiga aylansangiz yoki 3 ta tanishingizni olib kelsangiz 50%🥳 ga ega bo'lasiz. 2 ta tanishingizni olib kelsangiz 25%🥳 va oiladan ikki kishi bo'lsangiz ham 25%ni qo'lga kiritasiz ulgib qoling.🏃‍♂️`,
    { parse_mode: 'HTML', reply_markup: mainKeyboard }
  );
});
