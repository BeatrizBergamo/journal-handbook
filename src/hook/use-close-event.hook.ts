import React from "react";

interface CloseEventHookProps {
  closeFun: (open: false) => void;
  events: ("clickOutside" | "keyboardEscape")[];
}

type CloseEventHook = <T>(props: CloseEventHookProps) => React.MutableRefObject<T>;

export const useCloseEvent: CloseEventHook = ({ closeFun, events }) => {
  const elementRef = React.useRef<any>(null);

  React.useEffect(() => {
    function handleClickOutside(event: Event) {
      if (elementRef.current && !elementRef.current.contains?.(event.target)) {
        closeFun(false);
      }
    }

    function handleKeyUp(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeFun(false);
      }
    }

    function addEventListeners() {
      if (events.includes("clickOutside")) {
        document.addEventListener("mouseup", handleClickOutside);
      }
      if (events.includes("keyboardEscape")) {
        document.addEventListener("keyup", handleKeyUp);
      }
    }

    function removeEventListeners() {
      if (events.includes("clickOutside")) {
        document.removeEventListener("mouseup", handleClickOutside);
      }
      if (events.includes("keyboardEscape")) {
        document.removeEventListener("keyup", handleKeyUp);
      }
    }

    addEventListeners();

    return removeEventListeners;
  }, [elementRef, closeFun, events]);

  return elementRef;
};
