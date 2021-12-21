# 📅 Calendar Link

This is a modified version of the calendar-link package which includes basic recurring
events for Google and iCal.

---

JavaScript library to generate an event link for Google Calendar, Yahoo!
Calendar, Microsoft Outlook, etc.

### Usage

```js
// Usage with Node.js
const { google,  ics } = require("calendar-link");

// Usage with TypeScript or ES6
import { google, ics } from "calendar-link";

// Set event as an object
const event = {
  title: "My birthday party",
  description: "Be there!",
  start: "2019-12-29 18:00:00 +0100",
  duration: [3, "hour"],
  recur: "yearly"
};

// Then fetch the link
google(event); // https://calendar.google.com/calendar/render...
ics(event); // standard ICS file based on https://icalendar.org
```

### Options

| Property           | Description                 | Allowed values                              |
| ------------------ | --------------------------- | ------------------------------------------- |
| `title` (required) | Event title                 | String                                      |
| `start` (required) | Start time                  | JS Date / ISO 8601 string / Unix Timestamp  |
| `end`              | End time                    | JS Date / ISO 8601 string / Unix Timestamp  |
| `duration`         | Event duration              | Array with value (Number) and unit (String) |
| `allDay`           | All day event               | Boolean                                     |
| `description`      | Information about the event | String                                      |
| `location`         | Event location in words     | String                                      |
| `busy`             | Mark on calendar as busy?   | Boolean                                     |
| `guests`           | Emails of other guests      | Array of emails (String)                    |
| `url`              | Calendar document URL       | String                                      |
| `recur`            | The recurrence period       | daily, weekly, monthly, yearly              |

Any one of the fields `end`, `duration`, or `allDay` is required.

The allowed units in `duration` are listed here: https://day.js.org/docs/en/durations/creating#list-of-all-available-units.

The `url` field defaults to `document.URL` if a global `document` object exists. For server-side rendering, you should supply the `url` manually.

Not all calendars support the `guests` and `url` fields.

## License

MIT © [Anand Chowdhary](https://anandchowdhary.com/?utm_source=github&utm_medium=calendar-link&utm_campaign=readme)
