import React from "react";

import { Divider, Separator } from "@components/box";
import { Spacing, strings } from "@components/constants";
import { Flex } from "@components/flex";
import { Modal } from "@components/modal";
import { Tag } from "@components/tag/tag.component";
import { TasksContext } from "@components/task";
import { Body, BodySecondary } from "@components/typography";
import { TaskTitle } from "./task-modal.container.styled";
import { tagColors } from "@components/tag/tag.component.styled";

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
      <Separator size={Spacing.Small} />
      {task.description && <BodySecondary>{task.description}</BodySecondary>}
      <Separator size={Spacing.Small} />
      <Divider />
      <Separator size={Spacing.Small} />
      <Flex>
        <Flex.Item noGrow vAlign="center">
          <Body>Status:</Body>
        </Flex.Item>
        <Flex.Separator />
        {(() => {
          const tagColor = tagColors[task.status];
          return (
            <Flex.Item hAlign="flex-start" vAlign="center">
              <Tag bgColor={tagColor?.bg} textColor={tagColor?.text}>
                {task.status}
              </Tag>
            </Flex.Item>
          );
        })()}
      </Flex>
    </Modal>
  );
};
