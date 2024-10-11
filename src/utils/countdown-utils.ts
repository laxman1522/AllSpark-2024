/**
 * Formats a number to a two-digit string by padding with a leading zero if necessary.
 * @param {number} value The number to be formatted.
 * @return {string} A two-digit string representation of the number.
 */
export const dateUtil = (value: number): string => {
  return ('0' + value).slice(-2);
};

interface TimeRemaining {
  Total: number;
  Days: number;
  Hours: number;
  Minutes: number;
  Seconds: number;
}

/**
 * Calculates the remaining time in days, hours, minutes, and seconds from a given amount of time in milliseconds.
 * @param {number} remainingTime The remaining time in milliseconds.
 * @return {Object} An object containing the total remaining time and the breakdown in days, hours, minutes, and seconds.
 */
export const getTimeRemaining = (remainingTime: number): TimeRemaining => {
  return {
    Total: remainingTime,
    Days: Math.floor(remainingTime / (1000 * 60 * 60 * 24)),
    Hours: Math.floor((remainingTime / (1000 * 60 * 60)) % 24),
    Minutes: Math.floor((remainingTime / 1000 / 60) % 60),
    Seconds: Math.floor((remainingTime / 1000) % 60),
  };
};

/**
 * Calculates a target date by adding a specified number of days, hours, minutes, and seconds to the current date and time.
 * @param {number} days The number of days to add.
 * @param {number} hours The number of hours to add.
 * @param {number} minutes The number of minutes to add.
 * @param {number} seconds The number of seconds to add.
 * @return {Date} The calculated target date.
 */
export const calculateTarget = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
): Date => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + days);
  targetDate.setHours(targetDate.getHours() + hours);
  targetDate.setMinutes(targetDate.getMinutes() + minutes);
  targetDate.setSeconds(targetDate.getSeconds() + seconds);
  return targetDate;
};
