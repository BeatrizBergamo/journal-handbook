import { Colors } from "@components/constants";
import { FaIcon } from "@components/fa-icon";
import { Flex } from "@components/flex";
import { Label } from "@components/typography";
import React from "react";
import { HighlightedCard, KanbanColumnWrapper } from "./kanban.component.styled";
import { DraggableContext } from "@components/draggable";

interface KanbanColumnProps {
  label: string;
  icon?: keyof typeof FaIcon;
  color?: string;
  onAddTask(): void;
  isDragging?: boolean;
  children?: React.ReactNode;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = (props) => {
  const [hover, setHover] = React.useState(false);

  const Icon = props.icon && FaIcon[props.icon];
  const iconColor = props.color ?? Colors.GrayDark;

  return (
    <KanbanColumnWrapper drag={!!props.isDragging}>
      <Flex onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {Icon && (
          <Flex.Item noGrow>
            <Icon color={iconColor} />
          </Flex.Item>
        )}
        <Flex.Item hAlign="flex-start">
          <Label color={props.color}>{props.label}</Label>
        </Flex.Item>
        {hover && (
          <Flex.Item noGrow style={{ cursor: "pointer" }}>
            <FaIcon.Plus color={Colors.Gray} size="sm" onClick={props.onAddTask} />
          </Flex.Item>
        )}
      </Flex>
      {props.isDragging && <HighlightedCard />}
      {props.children}
    </KanbanColumnWrapper>
  );
};
