import { bot } from '../core/bot.ts';
import { mainKeyboard } from '../utils/keyboards.ts';
import 'https://deno.land/x/dotenv@v3.2.0/load.ts';

function getDistanceFromLatLonInKm(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
) {
  let R = 6371; // Radius of the earth in km
  let dLat = deg2rad(lat2 - lat1); // deg2rad below
  let dLon = deg2rad(lon2 - lon1);
  let a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  let d = R * c; // Distance in km
  return d.toFixed(2);
}

function deg2rad(deg: number) {
  return deg * (Math.PI / 180);
}

bot.on(':location', async (ctx) => {
  const distance = getDistanceFromLatLonInKm(
    ctx.message!.location.latitude,
    ctx.message!.location.longitude,
    parseInt(Deno.env.get('LAT')!),
    parseInt(Deno.env.get('LONG')!)
  );

  await ctx.replyWithLocation(
    parseInt(Deno.env.get('LAT')!),
    parseInt(Deno.env.get('LONG')!)
  );

  await ctx.reply(
    `Markazimizgacha bo\'lgan masofa: ${distance} km.\nManzilimiz: Andijon shahar, Boburshox ko'chasi, Atlant binosi 3-qavat`,
    { reply_markup: mainKeyboard }
  );
});
