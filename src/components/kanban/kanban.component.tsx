import React from "react";

import { Divider, Separator } from "@components/box";
import { Colors, Spacing, appStrings } from "@components/constants";
import { Flex } from "@components/flex";
import { BodySecondary, H2 } from "@components/typography";
import { AddColumnButton, KanbanColumnsWrapper, KanbanWrapper } from "./kanban.component.styled";
import { useParams } from "react-router-dom";
import { categoryMock } from "@data/mock";

interface KanbanProps {
  children?: React.ReactNode;
}

export const Kanban: React.FC<KanbanProps> = ({ children }) => {
  const { categoryId } = useParams();

  const category = categoryMock.categories.find((data) => data.id == categoryId);

  return (
    <KanbanWrapper>
      <Flex>
        <Flex.Item hAlign="flex-start">
          <H2>{category?.title}</H2>
          <BodySecondary color={Colors.GrayDark}>{category?.description}</BodySecondary>
          <Separator />
        </Flex.Item>
        <Flex.Item hAlign="flex-end" vAlign="flex-end" noGrow>
          <AddColumnButton variant="callToAction">{appStrings.kanban.addColumn}</AddColumnButton>
        </Flex.Item>
      </Flex>
      <Separator size={Spacing.XSmall} />
      <Divider />
      <Separator size={Spacing.Small} />
      <KanbanColumnsWrapper>{children}</KanbanColumnsWrapper>
    </KanbanWrapper>
  );
};
