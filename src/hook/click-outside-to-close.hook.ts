import React from "react";

export const useClickOutsideToClose = (ref: React.MutableRefObject<any>, closeFunc: (show: false) => void): void => {
  React.useEffect(() => {
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        closeFunc(false);
      }
    }

    document.addEventListener?.("mousedown", handleClickOutside);
    return () => document.removeEventListener?.("mousedown", handleClickOutside);
  }, [ref]);
};
