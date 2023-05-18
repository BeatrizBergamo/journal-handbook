import { TaskModel } from "@domain/model";
import React from "react";

interface DraggableContextProps {
  isDragging: boolean;
  setIsDragging(isDragging: boolean): void;
  draggableTask: TaskModel | null;
  setDraggableTask(draggableTask: TaskModel | null): void;
}

export const DraggableContext = React.createContext<DraggableContextProps>({
  isDragging: false,
  setIsDragging: () => null,
  draggableTask: null,
  setDraggableTask: () => null,
});
