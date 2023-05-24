import React from "react";

import { Kanban } from "@components/kanban";
import { TaskProvider } from "@components/task";
import { TaskModel, TaskStatus } from "@domain/model";
import { KanbanColumnContainer } from "./kanban-column.container";
import { DraggableContext } from "@components/draggable";

export const KanbanContainer = () => {
  const [isDragging, setIsDragging] = React.useState(false);
  const [draggableTask, setDraggableTask] = React.useState<TaskModel | null>(null);

  return (
    <TaskProvider>
      <Kanban>
        <DraggableContext.Provider
          value={{ setIsDragging, isDragging, setDraggableTask, draggableTask }}
        >
          <KanbanColumnContainer status={TaskStatus.ToDo} />
          <KanbanColumnContainer status={TaskStatus.InProgress} />
          <KanbanColumnContainer status={TaskStatus.Completed} />
        </DraggableContext.Provider>
      </Kanban>
    </TaskProvider>
  );
};
