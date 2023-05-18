import React from "react";

import { KabanCard } from "@components/card";
import { Colors, strings } from "@components/constants";
import { KanbanColumn } from "@components/kanban";
import { TasksContext } from "@components/task";
import { TaskModalContainer } from "@containers/task-modal";
import { TaskId, TaskStatus } from "@domain/model";
import { DraggableContext } from "@components/draggable";
import { KanbanColumnContainerWrapper } from "./kanban-column.container.styled";

interface KanbanColumnContainerProps {
  status: TaskStatus;
}

const columnPropsMap: Record<TaskStatus, { label: string; color: string }> = {
  [TaskStatus.ToDo]: { label: strings.kanban.columns[0], color: Colors.GrayDark },
  [TaskStatus.InProgress]: { label: strings.kanban.columns[1], color: Colors.BlueLight },
  [TaskStatus.Completed]: { label: strings.kanban.columns[2], color: Colors.Green },
};

export const KanbanColumnContainer: React.FC<KanbanColumnContainerProps> = ({ status }) => {
  const { isDragging, draggableTask, setDraggableTask } = React.useContext(DraggableContext);
  const { getTasks, addTask, setTask, updateTask } = React.useContext(TasksContext);
  const [createTask, setCreateTask] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [mouseEnter, setMouseEnter] = React.useState(false);

  const tasks = React.useMemo(() => getTasks(status), [getTasks, status]);

  function handleCreatedTask(taskTitle?: string) {
    addTask({ title: taskTitle || strings.card.defaultTitle, status });
    setCreateTask(false);
  }

  function handleShowDetails(selectedTaskId: TaskId) {
    setTask(tasks.find((task) => task.id === selectedTaskId));
    setShowModal(true);
  }

  function handleAddTask() {
    if (!draggableTask) {
      setCreateTask(true);
    } else {
      updateTask(draggableTask.id, { status });
      setDraggableTask(null);
    }
  }

  React.useEffect(() => {
    if (!isDragging && mouseEnter && draggableTask) {
      handleAddTask();
    }
  }, [isDragging]);

  function handleDragEnter(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (isDragging && draggableTask?.status !== status) {
      setMouseEnter(true);
    }
  }

  function handleDragLeave(event: React.DragEvent<HTMLDivElement>) {
    event.preventDefault();
    if (isDragging && mouseEnter) {
      setMouseEnter(false);
    }
  }

  return (
    <KanbanColumnContainerWrapper
      onMouseEnter={handleDragEnter}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      isDragging={mouseEnter}
    >
      <KanbanColumn {...columnPropsMap[status]} onAddTask={handleAddTask} isDragging={mouseEnter}>
        {tasks.map((task) => (
          <KabanCard key={task.id} task={task} onOpenDetails={handleShowDetails} />
        ))}
        {createTask && <KabanCard onCreatedTask={handleCreatedTask} focus />}
        {showModal && <TaskModalContainer show={showModal} onClose={setShowModal} />}
      </KanbanColumn>
    </KanbanColumnContainerWrapper>
  );
};
