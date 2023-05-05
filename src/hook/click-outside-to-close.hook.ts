import React from "react";

export const useClickOutsideToClose = (ref: React.MutableRefObject<any>, closeFunc: (show: false) => void): void => {
  React.useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeFunc(false);
      }
    }

    ref.current.addEventListener("mousedown", handleClickOutside);
    return () => ref.current.removeEventListener("mousedown", handleClickOutside);
  });
};
