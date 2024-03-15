import dateToSeconds from "./dateToSeconds";

const filterTask = (id, taskStyles) => {
  switch (id) {
    case "filterDate":
      return taskStyles.toSorted((a, b) => {
        return dateToSeconds(b.time, b.date) - dateToSeconds(a.time, a.date);
      });
    case "filterEndDate":
      return taskStyles.toSorted((a, b) => {
        return (
          dateToSeconds(a.time2, a.date2) - dateToSeconds(b.time2, b.date2)
        );
      });
    case "filterABC":
      return taskStyles.toSorted((a, b) => a.task.localeCompare(b.task));
    case "filterImportant":
      return taskStyles.toSorted((a, b) => b.colorStyle - a.colorStyle);

    default:
      return taskStyles.toSorted((a, b) => a.index - b.index);
  }
};

export default filterTask;
