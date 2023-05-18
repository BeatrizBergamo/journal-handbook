import React from "react";

import { strings } from "@components/constants";
import { Modal } from "@components/modal";
import { TasksContext } from "@components/task";
import { TaskTitle } from "./task-modal.container.styled";

interface TaskModalContainerProps {
  onClose(open: false): void;
  show: boolean;
}

export const TaskModalContainer: React.FC<TaskModalContainerProps> = ({ show, onClose }) => {
  const { task, updateTask } = React.useContext(TasksContext);
  const [updatedTaskTitle, setUpdatedTaskTitle] = React.useState<string>();

  if (!task) {
    throw new Error(
      "No task to show! Verify if this component is within the TaskProvider or if the function setTask was called properly",
    );
  }

  function handleChange(event: React.ChangeEvent<HTMLDivElement>) {
    setUpdatedTaskTitle(event.target.innerHTML ?? "");
  }

  function handleBlur() {
    updateTask(task!.id, { title: updatedTaskTitle ?? strings.card.defaultTitle });
  }

  return (
    <Modal show={show} onClose={onClose} type="aside">
      <TaskTitle
        contentEditable
        onInput={handleChange}
        onBlur={handleBlur}
        suppressContentEditableWarning
      >
        {task.title}
      </TaskTitle>
    </Modal>
  );
};
