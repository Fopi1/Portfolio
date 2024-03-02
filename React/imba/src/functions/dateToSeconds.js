const dateToSeconds = (time2, date2) => {
  time2 = time2.split(":");
  date2 = date2.split(".");
  let hours = Number(time2[0]);
  let minutes = Number(time2[1]);
  let days = Number(date2[0]);
  let months = Number(date2[1]);
  let years = Number(date2[2]);
  let daysForMonts = 30;
  let result = 0;
  if (months in [1, 3, 5, 7, 8, 10, 12]) {
    daysForMonts = 31;
  }
  result =
    hours * 60 * 60 +
    minutes * 60 +
    days * 24 * 60 * 60 +
    months * daysForMonts * 24 * 60 * 60 +
    years * 365 * 24 * 60 * 60;
  return result;
};

export default dateToSeconds;
