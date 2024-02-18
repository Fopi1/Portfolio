const dateToSeconds = (hours, minutes, days, months, years) => {
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
