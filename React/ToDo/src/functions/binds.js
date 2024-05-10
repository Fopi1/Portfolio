export const binds =
  (addCurrentPage, setModal, setFilterState, modal) => (event) => {
    if (!modal) {
      switch (event.code) {
        case "ArrowLeft":
        case "KeyA":
          addCurrentPage(-1);
          break;
        case "ArrowRight":
        case "KeyD":
          addCurrentPage(1);
          break;
        case "KeyQ":
          if (event.altKey) {
            setModal((prevModal) => !prevModal);
          }
          break;
        case "KeyR":
          setFilterState((prevFilter) => !prevFilter);
          break;
        default:
          break;
      }
    } else {
      switch (event.code) {
        case "KeyQ":
          if (event.altKey) {
            setModal((prevModal) => !prevModal);
          }
          break;
        default:
          break;
      }
    }
  };
