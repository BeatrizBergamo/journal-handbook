import React from "react";

import { KabanCard } from "@components/card";
import { Colors, strings } from "@components/constants";
import { KanbanColumn } from "@components/kanban";
import { TasksContext } from "@components/task";
import { TaskModel, TaskStatus } from "@domain/model";
import { TaskModalContainer } from "@containers/task-modal";

interface KanbanColumnContainerProps {
  status: TaskStatus;
}

const columnPropsMap: Record<TaskStatus, { label: string; color: string }> = {
  [TaskStatus.ToDo]: { label: strings.kanban.columns[0], color: Colors.GrayDark },
  [TaskStatus.InProgress]: { label: strings.kanban.columns[1], color: Colors.BlueLight },
  [TaskStatus.Completed]: { label: strings.kanban.columns[2], color: Colors.Green },
};

export const KanbanColumnContainer: React.FC<KanbanColumnContainerProps> = ({ status }) => {
  const { getTasks, addTask, setTask } = React.useContext(TasksContext);
  const [createTask, setCreateTask] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);

  const tasks = React.useMemo(() => getTasks(status), [getTasks, status]);

  function handleCreatedTask(taskTitle?: string) {
    addTask({ title: taskTitle || strings.card.defaultTitle, status });
    setCreateTask(false);
  }

  function handleShowDetails(selectedTaskTitle: string) {
    setTask(tasks.find((task) => task.title === selectedTaskTitle));
    setShowModal(true);
  }

  return (
    <KanbanColumn {...columnPropsMap[status]} onAddTask={() => setCreateTask(true)}>
      {tasks.map((task) => (
        <KabanCard key={task.title} title={task.title} onOpenDetails={handleShowDetails} />
      ))}
      {createTask && <KabanCard onCreatedTask={handleCreatedTask} focus />}
      {showModal && <TaskModalContainer show={showModal} onClose={setShowModal} />}
    </KanbanColumn>
  );
};
