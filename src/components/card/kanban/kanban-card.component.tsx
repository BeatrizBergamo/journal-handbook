import React from "react";

import { H3 } from "@components/typography";
import { KanbanCardTitle, KabanCardWrapper } from "./kanban-card.component.styled";
import { strings } from "@components/constants";

interface KanbanCardProps {
  title?: string;
}

export const KabanCard: React.FC<KanbanCardProps> = ({ title }) => {
  const [cardTitle, setCardTitle] = React.useState<string>();
  const cardRef = React.useRef<HTMLDivElement>({} as HTMLDivElement);

  function handleChange(event: React.ChangeEvent<HTMLDivElement>) {
    setCardTitle(event.target.innerHTML ?? "");
  }

  return (
    <KabanCardWrapper draggable>
      {title ? (
        <H3>{title}</H3>
      ) : (
        <KanbanCardTitle
          selected={!cardTitle}
          ref={cardRef}
          placeholder={strings.card.placeholder}
          contentEditable
          onInput={handleChange}
        />
      )}
    </KabanCardWrapper>
  );
};
