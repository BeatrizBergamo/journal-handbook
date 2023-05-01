import { Label } from "@components/typography";
import React from "react";
import { KanbanColumnWrapper } from "./kanban.component.styled";
import { Flex } from "@components/flex";
import { FaIcon } from "@components/fa-icon";
import { Colors, Spacing } from "@components/constants";
import { Separator } from "@components/box";

interface KanbanColumnProps {
  label: string;
  icon?: keyof typeof FaIcon;
  color?: string;
  children?: React.ReactNode;
}

export const KanbanColumn: React.FC<KanbanColumnProps> = ({ label, icon, color, children }) => {
  const [hover, setHover] = React.useState(false);

  const Icon = icon && FaIcon[icon];
  const iconColor = color ?? Colors.GrayDark;

  return (
    <KanbanColumnWrapper>
      <Flex onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {Icon && (
          <Flex.Item noGrow>
            <Icon color={iconColor} />
          </Flex.Item>
        )}
        <Flex.Item vAlign="flex-start">
          <Label color={color}>{label}</Label>
        </Flex.Item>
        {hover && (
          <Flex.Item noGrow style={{ cursor: "pointer" }}>
            <FaIcon.Plus color={Colors.Gray} size="sm" />
          </Flex.Item>
        )}
      </Flex>
      {children}
    </KanbanColumnWrapper>
  );
};
