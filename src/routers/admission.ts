import { Router } from '../core/deps.ts';
import { bot, MyContext } from '../core/bot.ts';
import { check, coursesKeyboard, cancel } from '../utils/keyboards.ts';

const router = new Router<MyContext>((ctx) => ctx.session.step);

const admission = router.route('admission');
admission.on('message:text', async (ctx) => {
  ctx.session.name = ctx.message.text;
  await ctx.reply(
    "Yashash manzilingizni?\nMisol: Ozodlik MFY Sharq yulduz ko'chasi 37 uy",
    { reply_markup: cancel }
  );
  ctx.session.step = 'address';
});

const address = router.route('address');
address.on('message:text', async (ctx) => {
  ctx.session.address = ctx.message.text;
  await ctx.reply('Telefon raqam?\nMisol: +998935270123', {
    reply_markup: cancel,
  });
  ctx.session.step = 'phoneNumber';
});

const phoneNumber = router.route('phoneNumber');
phoneNumber.on('message:text', async (ctx) => {
  ctx.session.phoneNumber = ctx.message.text;
  await ctx.reply("Qo'shimcha telefon raqam?\nMisol: +998935270123", {
    reply_markup: cancel,
  });
  ctx.session.step = 'phoneNumber2';
});

const phoneNumber2 = router.route('phoneNumber2');
phoneNumber2.on('message:text', async (ctx) => {
  ctx.session.phoneNumber2 = ctx.message.text;
  await ctx.reply("Kurs yo'nalishini tanlang", {
    reply_markup: coursesKeyboard,
  });
  ctx.session.step = 'courseType';
});

const courseType = router.route('courseType');
courseType.on('message:text', async (ctx) => {
  ctx.session.courseType = ctx.message.text;
  const message = `Ism: ${ctx.session.name}\nManzili: ${ctx.session.address}\nTelefon raqam: ${ctx.session.phoneNumber}, ${ctx.session.phoneNumber2}\nKurs: ${ctx.session.courseType}`;
  await ctx.reply(message, { reply_markup: check });
  ctx.session.step = 'start';
});

bot.use(router);
