import { Bot, Context, SessionFlavor, session } from '../core/deps.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

interface SessionData {
  step: "start" | "admission" | "aboutCourses" | 'address' | 'phoneNumber' | 'phoneNumber2' | 'courseType' | 'check';
  name?: string;
  address?: string;
  phoneNumber?: string;
  phoneNumber2?: string;
  courseType?: string;
}

type MyContext = Context & SessionFlavor<SessionData>;

const bot = new Bot<MyContext>(Deno.env.get('BOT_TOKEN')!);

bot.use(session({ initial: (): SessionData => ({ step: "start" }) }));
bot.start();

export { bot };
export type { MyContext };
