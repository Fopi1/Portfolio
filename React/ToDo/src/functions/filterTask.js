import { dateToSeconds } from "./dateToSeconds";

// Выбранные фильтры для сортировки
let chosenFilters = new Array(0);
export const filterTask = (currentPage, id, taskStyles) => {
  let currentPageTaskStyles = taskStyles[currentPage];
  // Проверка на то входит ли нажатый фильтр в список выбранных фильтров
  if (chosenFilters.includes(id.slice(0, -1))) {
    chosenFilters = chosenFilters.filter((e) => e !== id.slice(0, -1));
  } else {
    chosenFilters.push(id);
  }
  // Провека на то, что выбранный список фильтров пустой и возвращает дефолтный порядок
  if (chosenFilters.length === 0) {
    currentPageTaskStyles.sort((a, b) => a.index - b.index);
    taskStyles[currentPage] = currentPageTaskStyles;
    return taskStyles;
  }
  // Обнуление места на котором находится задание при видах сортировки
  currentPageTaskStyles = currentPageTaskStyles.map((e) => {
    return {
      ...e,
      dateRank: 0,
      endDateRank: 0,
      alphabetRank: 0,
      importanceRank: 0,
    };
  });
  // Сама сортировка
  chosenFilters.forEach((e) => {
    switch (e) {
      case "filterDate":
        currentPageTaskStyles
          .sort(
            (a, b) =>
              dateToSeconds(b.time, b.date) - dateToSeconds(a.time, a.date)
          )
          .forEach((element, index) => (element.dateRank = index + 1));
        break;
      case "filterEndDate":
        currentPageTaskStyles
          .sort(
            (a, b) =>
              dateToSeconds(a.endTime, a.endDate) -
              dateToSeconds(b.endTime, b.endDate)
          )
          .forEach((element, index) => (element.endDateRank = index + 1));
        break;
      case "filterAlphabet":
        currentPageTaskStyles
          .sort((a, b) => a.task.localeCompare(b.task))
          .forEach((element, index) => (element.alphabetRank = index + 1));
        break;
      case "filterImportance":
        currentPageTaskStyles
          .sort((a, b) => b.colorStyle - a.colorStyle)
          .forEach((element, index) => (element.importanceRank = index + 1));
        break;
      default:
        break;
    }
  });
  // "Усреднённая сортировка" т.е если выбрано больше 1 фильтра то сортировка происходит на основе среднего значение каждого ранга
  currentPageTaskStyles.sort(
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
  taskStyles[currentPage] = currentPageTaskStyles;
  return taskStyles;
};
