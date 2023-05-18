import React from "react";

import { KabanCard } from "@components/card";
import { Colors, strings } from "@components/constants";
import { KanbanColumn } from "@components/kanban";
import { TasksContext } from "@components/task";
import { TaskStatus } from "@domain/model";

interface KanbanColumnContainerProps {
  status: TaskStatus;
}

const columnPropsMap: Record<TaskStatus, { label: string; color: string }> = {
  [TaskStatus.ToDo]: { label: strings.kanban.columns[0], color: Colors.GrayDark },
  [TaskStatus.InProgress]: { label: strings.kanban.columns[1], color: Colors.BlueLight },
  [TaskStatus.Completed]: { label: strings.kanban.columns[2], color: Colors.Green },
};

export const KanbanColumnContainer: React.FC<KanbanColumnContainerProps> = ({ status }) => {
  const { getTasks } = React.useContext(TasksContext);

  const tasks = React.useMemo(() => getTasks(status), [getTasks, status]);

  return (
    <KanbanColumn {...columnPropsMap[status]}>
      {tasks.map((task) => (
        <KabanCard key={task.title} title={task.title} />
      ))}
    </KanbanColumn>
  );
};
