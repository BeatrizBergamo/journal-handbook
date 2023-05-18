import React from "react";

import { H4 } from "@components/typography";
import { KanbanCardTitle, KabanCardWrapper } from "./kanban-card.component.styled";
import { strings } from "@components/constants";

interface KanbanCardProps {
  title?: string;
  onCreatedTask?(title: string): void;
  focus?: boolean;
}

export const KabanCard: React.FC<KanbanCardProps> = ({ title, focus, onCreatedTask }) => {
  const [cardTitle, setCardTitle] = React.useState<string>("");
  const cardRef = React.useRef<HTMLDivElement>({} as HTMLDivElement);

  React.useEffect(() => {
    if (focus) {
      cardRef.current.focus();
    }
  }, [focus]);

  function handleChange(event: React.ChangeEvent<HTMLDivElement>) {
    setCardTitle(event.target.innerHTML ?? "");
  }

  return (
    <KabanCardWrapper draggable>
      {title ? (
        <H4>{title}</H4>
      ) : (
        <KanbanCardTitle
          selected={!cardTitle}
          ref={cardRef}
          placeholder={strings.card.placeholder}
          contentEditable
          onInput={handleChange}
          onBlur={() => onCreatedTask?.(cardTitle)}
        />
      )}
    </KabanCardWrapper>
  );
};
