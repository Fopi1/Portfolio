import dateToSeconds from "./dateToSeconds";

let chosenFilters = new Array(0);
const filterTask = (id, taskStyles) => {
  if (chosenFilters.includes(id.slice(0, -1))) {
    chosenFilters = chosenFilters.filter((e) => e !== id.slice(0, -1));
  } else {
    chosenFilters.push(id);
  }
  if (chosenFilters.length === 0) {
    return taskStyles.sort((a, b) => a.index - b.index);
  }
  taskStyles = taskStyles.map((e) => {
    return {
      ...e,
      dateRank: 0,
      endDateRank: 0,
      alphabetRank: 0,
      importanceRank: 0,
    };
  });
  chosenFilters.forEach((e) => {
    switch (e) {
      case "filterDate":
        taskStyles
          .sort(
            (a, b) =>
              dateToSeconds(b.time, b.date) - dateToSeconds(a.time, a.date)
          )
          .forEach((element, index) => (element.dateRank = index + 1));
        break;
      case "filterEndDate":
        taskStyles
          .sort(
            (a, b) =>
              dateToSeconds(a.endTime, a.endDate) -
              dateToSeconds(b.endTime, b.endDate)
          )
          .forEach((element, index) => (element.endDateRank = index + 1));
        break;
      case "filterAlphabet":
        taskStyles
          .sort((a, b) => a.task.localeCompare(b.task))
          .forEach((element, index) => (element.alphabetRank = index + 1));
        break;
      case "filterImportance":
        taskStyles
          .sort((a, b) => b.colorStyle - a.colorStyle)
          .forEach((element, index) => (element.importanceRank = index + 1));
        break;
      default:
        break;
    }
  });
  return taskStyles.sort(
    (a, b) =>
      a.dateRank +
      a.endDateRank +
      a.alphabetRank +
      a.importanceRank -
      b.dateRank -
      b.endDateRank -
      b.alphabetRank -
      b.importanceRank
  );
};

export default filterTask;
