import React from "react";

import { Modal } from "@components/modal";
import { TasksContext } from "@components/task";
import { H2 } from "@components/typography";

interface TaskModalContainerProps {
  onClose(open: false): void;
  show: boolean;
}

export const TaskModalContainer: React.FC<TaskModalContainerProps> = ({ show, onClose }) => {
  const { task } = React.useContext(TasksContext);

  if (!task) {
    throw new Error(
      "No task to show! Verify if this component is within the TaskProvider or if the function setTask was called properly",
    );
  }

  return (
    <Modal show={show} onClose={onClose} type="aside">
      <H2>{task.title}</H2>
    </Modal>
  );
};
