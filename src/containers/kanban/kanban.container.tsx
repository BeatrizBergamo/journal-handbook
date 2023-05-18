import { Kanban } from "@components/kanban";
import { TaskProvider } from "@components/task";
import { TaskStatus } from "@domain/model";
import { KanbanColumnContainer } from "./kanban-column.container";

export const KanbanContainer = () => {
  return (
    <TaskProvider>
      <Kanban>
        <KanbanColumnContainer status={TaskStatus.ToDo} />
        <KanbanColumnContainer status={TaskStatus.InProgress} />
        <KanbanColumnContainer status={TaskStatus.Completed} />
      </Kanban>
    </TaskProvider>
  );
};
