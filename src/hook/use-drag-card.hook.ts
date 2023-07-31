import React from "react";

import { DraggableContext } from "@components/draggable";
import { TaskStatus } from "@domain/model";

export const useDragCard = (input: {
  ref: React.MutableRefObject<any>;
  columnStatus: TaskStatus;
  mouseEnter(enter: boolean): void;
}) => {
  const { isDragging, draggableTask } = React.useContext(DraggableContext) ?? {};

  function handleDragEnter() {
    if (isDragging && draggableTask?.status !== input.columnStatus) {
      input.mouseEnter(true);
    }
  }

  function handleDragStop() {
    if (isDragging) {
      input.mouseEnter(false);
    }
  }

  React.useEffect(() => {
    function handleDragEnterEvent(event: Event) {
      if (input.ref.current?.contains(event.target)) {
        handleDragEnter();
      }
    }

    function handleDragLeaveEvent(event: Event) {
      if (input.ref.current?.contains(event.target)) {
        handleDragStop();
      }
    }

    document.addEventListener?.("dragenter", handleDragEnterEvent);
    document.addEventListener?.("dragleave", handleDragLeaveEvent);

    return () => {
      document.removeEventListener?.("dragleave", handleDragLeaveEvent);
      document.removeEventListener?.("dragenter", handleDragEnterEvent);
    };
  }, [input]);
};
