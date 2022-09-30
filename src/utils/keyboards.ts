import { InlineKeyboard, Keyboard } from '../core/deps.ts';

const mainKeyboard = new Keyboard()
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

const coursesKeyboard = new Keyboard()
  .text('Kompyuter savodxonligi 🧑‍💻')
  .row()
  .text('Frontend 🖥')
  .text('Backend ⚙️')
  .row()
  .text('Android 📱')
  .row()
  .text('Ortga qaytish 🔙')
  .resized()
  .oneTime();

const cancel = new Keyboard().text('Bekor qilish!').resized().oneTime();

const location = new Keyboard()
  .requestLocation('Lokatsiyani yuborish')
  .row()
  .text('Ortga qaytish 🔙')
  .oneTime()
  .resized();

const check = new InlineKeyboard()
  .text("To'g'ri", 'true')
  .text('Xato', 'false');

export { check, coursesKeyboard, mainKeyboard, cancel, location };
