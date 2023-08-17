import { useEffect } from "react";

const useEmptyClick = (ref, cb) => {
  useEffect(() => {
    const emptyClick = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      cb();
    };

    document.addEventListener("mousedown", emptyClick);
    document.addEventListener("touchstart", emptyClick);

    return () => {
      document.removeEventListener("mousedown", emptyClick);
      document.removeEventListener("touchstart", emptyClick);
    };
  });
};

export default useEmptyClick;
