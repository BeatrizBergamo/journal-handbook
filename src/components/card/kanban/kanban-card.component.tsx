import { Body } from "@components/typography";
import React from "react";
import { KanbanCardTitle, KabanCardWrapper } from "./kanban-card.component.styled";
import { strings } from "@components/constants";

interface KanbanCardProps {
  title?: string;
}

// TODO - Fix this component
export const KabanCard: React.FC<KanbanCardProps> = ({ title }) => {
  const [cardTitle, setCardTitle] = React.useState<string>();

  function handleChange(event: React.ChangeEvent<HTMLDivElement>) {
    setCardTitle(event.target.textContent ?? "");
  }

  function handleFocus(event: React.FocusEvent<HTMLDivElement>) {
    if (!cardTitle) {
      event.currentTarget.textContent = "";
    }
  }

  return (
    <KabanCardWrapper>
      {title ? (
        <Body>{title}</Body>
      ) : (
        <KanbanCardTitle
          contentEditable="true"
          placeholder={strings.card.placeholder}
          onInput={handleChange}
          onFocus={handleFocus}
        >
          {cardTitle ?? strings.card.placeholder}
        </KanbanCardTitle>
      )}
    </KabanCardWrapper>
  );
};
