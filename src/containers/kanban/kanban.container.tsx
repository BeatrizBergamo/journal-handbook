import { strings } from "@components/constants";
import { Kanban } from "@components/kanban";
import { TaskStatus } from "@domain/model";
import { KanbanColumnContainer } from "./kanban-column.container";
import { TaskProvider } from "@components/task";

export const KanbanContainer = () => {
  return (
    <TaskProvider>
      <Kanban title={strings.wishlist.title}>
        <KanbanColumnContainer status={TaskStatus.ToDo} />
        <KanbanColumnContainer status={TaskStatus.InProgress} />
        <KanbanColumnContainer status={TaskStatus.Completed} />
      </Kanban>
    </TaskProvider>
  );
};
