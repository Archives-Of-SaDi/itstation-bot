import { Router } from '../core/deps.ts';
import { bot, MyContext } from '../core/bot.ts';
import { coursesKeyboard } from '../utils/keyboards.ts';

const router = new Router<MyContext>((ctx) => ctx.session.step);

const aboutCourses = router.route('aboutCourses');

aboutCourses.hears('Backend ⚙️', async (ctx) => {
  await ctx.reply(
    `Java dasturlash tili va uning imkoniyatlari` +
      `\n` +
      `\n` +
      `1. Java nima?` +
      `\n` +
      `Java dasturlash tili va platforma. Java yuqori darajali, mustahkam, xavfsiz va obyektga yo'naltirilgan til. Platforma: dastur bajarila oladigan ixtiyoriy apparat yoki dasturiy muhit platformadir. Javaning ham o'zini mahsus bajarilish muhiti – platformasi mavjud (JRE – Java Runtime Environment).` +
      `\n` +
      `\n` +
      `2. Javadan qayerda foydalaniladi?` +
      `\n` +
      `“Sun” firmasi ma'lumotiga ko'ra, 3 mlrd atrofidagi qurilmalar Javani ishlatadi (eski ma'lumot, hozir undan ko'p).Mana ulardan ba'zilari:-Shaxsiy kompyuter dasturlari (Desktop Applications) – acrobat reader, media-pleyer, antiviruslar va h.k. Web-dasturlar` +
      `\n` +
      `\n` +
      `3. Asosiy konsepsiyalari` +
      `\n` +
      `Oddiy, obyektga mo'ljallangan, taqsimlangan va o'rganishga oson bo'lsin.Mustahkam va xavsiz bo'lsinQaysidir qurilma platformasidan yoki uning arxitekturasidan mustaqil bo'lsin(ya'ni qaysidir platformaga tobe bo'lmasin).Juda samarali bo'lsin.Dasturlash tili uchun tarjimon(interpreter) yozish mumkin bo'lsin.` +
      `\n` +
      `\n` +
      `4.Javada qanaqa dasturlar yoziladi` +
      `\n` +
      `Standalone applications` +
      `\n` +
      `Web Applications` +
      `\n` +
      `Enterprise Applications` +
      `\n` +
      `Mobile Applications` +
      `\n` +
      `\n` +
      `⌚️ Kurs davomiyligi - 9 oy` +
      `\n` +
      `\n` +
      `Kurs davomiyligi modullarda:` +
      `\n` +
      `#  JAVA DEVELOPMENT:` +
      `\n` +
      `1.Java Core Basic` +
      `\n` +
      `2.Java OOP va Collections` +
      `\n` +
      `3.Java Advanced` +
      `\n` +
      `\n` +
      `# DATABASE DEVELOPMENT:` +
      `\n` +
      `1.PostgreSQL` +
      `\n` +
      `# SPRING DEVELOPMENT` +
      `\n` +
      `1.Spring Basic` +
      `\n` +
      `2.Spring Advanced` +
      `\n` +
      `\n` +
      `# Suhbatga tayyorgarlik + Practice` +
      `\n` +
      `\n` +
      `💴 Kurs narxi - 442 000 so'm/oy` +
      `\n` +
      `\n` +
      `☎️ Murojat uchun: +998932120011` +
      `\n` +
      `\n` +
      `📝Telegram:  @ITstation_admin1` +
      `\n` +
      `\n` +
      `🔗 Kanal: https://t.me/itstation_group`,
    { reply_markup: coursesKeyboard, parse_mode: 'HTML' }
  );
});

aboutCourses.hears('Frontend 🖥', async (ctx) => {
  await ctx.reply(
    `<b>Contents of Front-End Course!</b>\n` +
      `Bu kursda siz web saytlarni foydalanuvchiga ko'rinadigan jamiyki qismlarini mustaqil qila oladigan darajada bo'lasiz, va kurs so'ngida portfolio va sertifikatga ega bo'lasiz ;)\n` +
      `\n` +
      `Websiteni inson ko'rinishida misol qilsak, inson suyagi bu HTML, inson ko'rinishi bu CSS endi inson xarakatlanishi esa JavaScript :)\n` +
      `\n` +
      `Va bularni onsonlashtirish, qulay qilish maqsadida kutubxona va frameworklarham mavjud\n` +
      `\n` +
      `Kurs mundarijasi:\n` +
      `1-oy: HTML, CSS, Bootstrap\n` +
      `  HTML - Basic Tags\n` +
      `  CSS - Most Properties\n` +
      `  Bootstrap - Full\n` +
      `\n` +
      `2-oy: JavaScript\n` +
      `  JavaScript - Objects, Built-in Methods, OOP\n` +
      `\n` +
      `2-oy: React JS, Redux\n` +
      `  React JS - hooks, components\n` +
      `  Redux - Datas\n` +
      `\n` +
      `1-oy: Portfolio uchun amaliyot\n` +
      `  Bir qancha full landing pagelar\n` +
      `\n` +
      `Kurs davomiyligi - <b>6 oy</b>\n` +
      `Kurs narxi - <b>442 000 so'm/oy</b>\n` +
      `Murojaat uchun: <b>+998932120011</b>\n` +
      `\n` +
      `Telegram: @itstation_admin1`,
    { reply_markup: coursesKeyboard, parse_mode: 'HTML' }
  );
});

bot.use(router);
