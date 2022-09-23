import { bot } from '../core/index.ts';
import { aboutCourses } from '../controllers/index.ts';

bot.hears('Kurslar haqida 📃', aboutCourses);
