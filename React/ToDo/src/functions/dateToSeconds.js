export const dateToSeconds = (time, date) => {
  time = time.split(":");
  date = date.split(".");
  let hours = Number(time[0]);
  let minutes = Number(time[1]);
  let days = Number(date[0]);
  let month = Number(date[1]);
  let years = Number(date[2]);
  let daysForMonth = 30;
  let result = 0;
  if (month in [1, 3, 5, 7, 8, 10, 12]) {
    daysForMonth = 31;
  } else if (month === 2) {
    daysForMonth = 28;
  }
  result =
    hours * 60 * 60 +
    minutes * 60 +
    days * 24 * 60 * 60 +
    month * daysForMonth * 24 * 60 * 60 +
    years * 365 * 24 * 60 * 60;
  return result;
};
