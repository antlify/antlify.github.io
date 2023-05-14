import { formatInTimeZone } from "date-fns-tz";

const dateFormat = (date:Date | string, format:string = "yyyy. MM. dd. ") => {
  return formatInTimeZone(date, "Europe/Budapest", format);
};

export default dateFormat;
