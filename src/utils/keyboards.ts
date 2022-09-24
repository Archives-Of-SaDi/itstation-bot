import { Keyboard, InlineKeyboard} from '../core/deps.ts';

const startKeyboard = new Keyboard()
  .text('Kursga yozilish 👨‍🎓')
  .text('Kurslar haqida 📃')
  .row()
  .text('Lokatsiya 📍')
  .text("Biz bilan bog'lanish 📞")
  .row()
  .text('Takliflar 📝')
  .text('Chegirmalar 🟢')
  .resized()
  .oneTime();

const aboutCoursesKeyboard = new Keyboard()
  .text('Kompyuter savodxonligi 🧑‍💻')
  .row()
  .text('Frontend 🖥')
  .text('Backend ⚙️')
  .row()
  .text('Android 📱')
  .row()
  .text('Ingliz tili 🇺🇸')
  .row()
  .oneTime();


const check = new InlineKeyboard()
  .text('To\'g\'ri', 'true')
  .text('Xato', 'false')

export { startKeyboard, aboutCoursesKeyboard, check };
