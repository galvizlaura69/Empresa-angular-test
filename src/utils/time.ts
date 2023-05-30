import { min } from "rxjs";

const switchTimeZone = (offset:any)=> {
  const now = new Date();
  const currentTime = now.getTime();
  const newTime = currentTime + (offset * 1000);
  now.setTime(newTime);
  const min = now.getMinutes() < 10 ? `0${now.getMinutes()}`: now.getMinutes();
  const formatHour = `${now.getHours() + 5 }:${min}`;
  return formatHour;
}

//console.log(switchTimeZone(-1800));
export default switchTimeZone;
