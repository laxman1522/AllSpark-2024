export function dateToISOFormat(inputDateString: string) {
  const inputDate = new Date(inputDateString);
  const year = inputDate.getFullYear();
  const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
  const day = inputDate.getDate().toString().padStart(2, '0');
  const hour = inputDate.getHours().toString().padStart(2, '0');
  const minute = inputDate.getMinutes().toString().padStart(2, '0');
  const second = inputDate.getSeconds().toString().padStart(2, '0');
  const formattedDateString = `${year}${month}${day}T${hour}${minute}${second}Z`;
  return formattedDateString;
}
