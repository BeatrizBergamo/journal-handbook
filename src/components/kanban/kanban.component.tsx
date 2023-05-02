import React from "react";

import { Divider, Separator } from "@components/box";
import { Spacing } from "@components/constants";
import { H2 } from "@components/typography";
import { strings } from "@components/constants";
import { Flex } from "@components/flex";
import { AddColumnButton, KanbanColumnsWrapper, KanbanWrapper } from "./kanban.component.styled";

interface KanbanProps {
  title: string;
  children?: React.ReactNode;
}

export const Kanban: React.FC<KanbanProps> = ({ title, children }) => {
  return (
    <KanbanWrapper>
      <Flex>
        <Flex.Item vAlign="flex-start">
          <H2>{title}</H2>
        </Flex.Item>
        <Flex.Item vAlign="flex-end" hAlign="flex-end" noGrow>
          <AddColumnButton variant="callToAction">{strings.kanban.addColumn}</AddColumnButton>
        </Flex.Item>
      </Flex>
      <Separator size={Spacing.XSmall} />
      <Divider />
      <Separator size={Spacing.Small} />
      <KanbanColumnsWrapper>{children}</KanbanColumnsWrapper>
    </KanbanWrapper>
  );
};
