import { useRef } from "react";
export const useMultipleRefs = (count, ref) => {
  const refs = Array(count)
    .fill()
    // eslint-disable-next-line react-hooks/rules-of-hooks
    .map(() => useRef(ref));
  return refs;
};
