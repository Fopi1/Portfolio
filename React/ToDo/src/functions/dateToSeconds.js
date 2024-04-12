export const dateToSeconds = (endTime, endDate) => {
  endTime = endTime.split(":");
  endDate = endDate.split(".");
  let hours = Number(endTime[0]);
  let minutes = Number(endTime[1]);
  let days = Number(endDate[0]);
  let months = Number(endDate[1]);
  let years = Number(endDate[2]);
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
