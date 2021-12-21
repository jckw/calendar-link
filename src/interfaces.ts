import dayjs from "dayjs";

interface CalendarEvent {
  title: string;
  start: any;
  end?: any;
  duration?: [number, dayjs.UnitType];
  allDay?: boolean;
  description?: string;
  location?: string;
  busy?: boolean;
  guests?: string[];
  url?: string;
  recur?: "daily" | "weekly" | "monthly" | "yearly";
}

interface NormalizedCalendarEvent extends Omit<CalendarEvent, "start" | "end" | "duration"> {
  startUtc: dayjs.Dayjs;
  endUtc: dayjs.Dayjs;
}

interface Google extends Record<string, string | boolean | number | undefined> {
  action: string;
  text: string;
  dates: string;
  details?: string;
  location?: string;
  trp?: boolean;
  sprop?: string;
  add?: string;
  src?: string;
  recur?: string;
}

export { CalendarEvent, NormalizedCalendarEvent, Google };
