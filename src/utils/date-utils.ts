export const dateToISOFormat = (inputDateString: string) => {
  const inputDate = new Date(inputDateString);
  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const day = inputDate.getDate().toString().padStart(2, '0');
  const hour = inputDate.getHours().toString().padStart(2, '0');
  const minute = inputDate.getMinutes().toString().padStart(2, '0');
  const second = inputDate.getSeconds().toString().padStart(2, '0');
  const formattedDateString = `${year}${month}${day}T${hour}${minute}${second}Z`;
  return formattedDateString;
};

export const createICSContent = (
  start: string,
  end: string,
  title: string,
  description?: string,
) => {
  return `
  BEGIN:VCALENDAR
  VERSION:2.0
  METHOD:PUBLISH
  BEGIN:VEVENT
  TZID:Asia/Kolkata
  TZOFFSETFROM:+0530
  TZOFFSETTO:+0530
  DTSTART;TZID=Asia/Kolkata:${start}
  DTEND;TZID=Asia/Kolkata:${end}
  LOCATION:Bengaluru
  TRANSP:OPAQUE
  SUMMARY:${title}
  DESCRIPTION:${description}
  PRIORITY:5
  CLASS:PUBLIC
  BEGIN:VALARM
  TRIGGER:-PT15M
  ACTION:DISPLAY
  title:Reminder
  END:VALARM
  END:VEVENT
  END:VCALENDAR
`;
};
