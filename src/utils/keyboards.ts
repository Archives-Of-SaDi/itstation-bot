import { Keyboard } from '../packages/index.ts';

const startKeyboard = new Keyboard()
  .text('Kursga yozilish 👨‍🎓')
  .text('Kurslar haqida 📃')
  .row()
  .text('Lokatsiya 📍')
  .text("Biz bilan bog'lanish 📞")
  .row()
  .text('Takliflar 📝')
  .text('Chegirmalar 🟢')
  .resized();

const aboutCoursesKeyboard = new Keyboard()
  .text('Kompyuter savodxonligi 🧑‍💻')
  .row()
  .text('Frontend 🖥')
  .text('Backend ⚙️')
  .row()
  .text('Android 📱')
  .row()
  .text('Ingliz tili 🇺🇸')
  .row();

export { startKeyboard, aboutCoursesKeyboard };
