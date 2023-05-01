import React from "react";
import { KanbanColumnsWrapper, KanbanWrapper } from "./kanban.component.styled";
import { H2 } from "@components/typography";
import { Spacing, strings } from "@components/constants";
import { Divider, Separator } from "@components/box";

export const Kanban: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <KanbanWrapper>
      <H2>{strings.wishlist.title}</H2>
      <Divider />
      <Separator size={Spacing.Small} />
      <KanbanColumnsWrapper>{children}</KanbanColumnsWrapper>
    </KanbanWrapper>
  );
};
