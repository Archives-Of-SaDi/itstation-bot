import { Context } from '../packages/index.ts';
import { aboutCoursesKeyboard } from '../utils/keyboards.ts';

function aboutCourses(ctx: Context) {
  ctx.reply("O'zingizga kerakli kursni tanlang", {
    reply_markup: aboutCoursesKeyboard,
  });
}

export { aboutCourses };
