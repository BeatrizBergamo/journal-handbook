import React from "react";

import { KabanCard } from "@components/card";
import { Colors, appStrings } from "@components/constants";
import { KanbanColumn } from "@components/kanban";
import { TasksContext } from "@components/task";
import { TaskModalContainer } from "@containers/task-modal";
import { TaskId, TaskStatus } from "@domain/model";
import { DraggableContext } from "@components/draggable";
import { KanbanColumnContainerWrapper } from "./kanban-column.container.styled";

interface KanbanColumnContainerProps {
  status: TaskStatus;
}

const strings = appStrings.kanban;

const columnPropsMap: Record<TaskStatus, { label: string; color: string }> = {
  [TaskStatus.ToDo]: { label: strings.columns[TaskStatus.ToDo], color: Colors.GrayDark },
  [TaskStatus.InProgress]: {
    label: strings.columns[TaskStatus.InProgress],
    color: Colors.Primary,
  },
  [TaskStatus.Completed]: {
    label: strings.columns[TaskStatus.Completed],
    color: Colors.FeedbackSuccess,
  },
};

export const KanbanColumnContainer: React.FC<KanbanColumnContainerProps> = (props) => {
  const { isDragging, draggableTask, setDraggableTask } = React.useContext(DraggableContext);
  const { getTasks, addTask, setTask, updateTask } = React.useContext(TasksContext);
  const [createTask, setCreateTask] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [mouseEnter, setMouseEnter] = React.useState(false);

  const tasks = React.useMemo(() => getTasks(props.status), [getTasks, props.status]);

  function handleCreatedTask(taskTitle?: string) {
    addTask({ title: taskTitle || appStrings.card.defaultTitle, status: props.status });
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
      updateTask(draggableTask.id, { status: props.status });
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
    if (isDragging && draggableTask?.status !== props.status) {
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
    <KanbanColumnContainerWrapper onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}>
      <KanbanColumn
        {...columnPropsMap[props.status]}
        onAddTask={handleAddTask}
        isDragging={mouseEnter}
      >
        {tasks.map((task) => (
          <KabanCard key={task.id} task={task} onOpenDetails={handleShowDetails} />
        ))}
        {createTask && <KabanCard onCreatedTask={handleCreatedTask} focus />}
        {showModal && <TaskModalContainer show={showModal} onClose={setShowModal} />}
      </KanbanColumn>
    </KanbanColumnContainerWrapper>
  );
};
