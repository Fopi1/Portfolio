import dateToSeconds from "./dateToSeconds";

let chosenFilters = new Array(0);
let ranks = new Array(4).fill(0);
const filterTask = (id, taskStyles) => {
  if (chosenFilters.includes(id.slice(0, -1))) {
    chosenFilters = chosenFilters.filter((e) => e !== id.slice(0, -1));
  } else {
    chosenFilters.push(id);
  }
  if (chosenFilters.length === 0) {
    return taskStyles.sort((a, b) => a.index - b.index);
  }
  for (let i = 0; i < chosenFilters.length; i++) {
    switch (chosenFilters[i]) {
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
              dateToSeconds(a.time, a.date) - dateToSeconds(b.time, b.date)
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
  }
  console.log(taskStyles);
  return taskStyles;
};

export default filterTask;
