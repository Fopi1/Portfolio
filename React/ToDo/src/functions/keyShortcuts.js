export const keyShortcuts =
  (addCurrentPage, setModal, setFilterState, modal) => (event) => {
    if (!modal) {
      switch (event.keyCode) {
        case 37:
        case 65:
          addCurrentPage(-1);
          break;
        case 39:
        case 68:
          addCurrentPage(1);
          break;
        case 70:
          setModal((prevModal) => !prevModal);
          break;
        case 82:
          setFilterState((prevFilter) => !prevFilter);
          break;
        default:
          break;
      }
    } else {
      if (event.keyCode === 70) {
        setModal((prevModal) => !prevModal);
      }
    }
  };
