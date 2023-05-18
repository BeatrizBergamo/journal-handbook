import React from "react";

import { H4 } from "@components/typography";
import { KanbanCardTitle, KabanCardWrapper } from "./kanban-card.component.styled";
import { Colors, strings } from "@components/constants";
import { Flex } from "@components/flex";
import { FaIcon } from "@components/fa-icon";
import { TaskId } from "@domain/model";

interface KanbanCardProps {
  title?: string;
  id?: TaskId;
  onCreatedTask?(title: string): void;
  onOpenDetails?(id?: TaskId): void;
  focus?: boolean;
}

export const KabanCard: React.FC<KanbanCardProps> = ({
  id,
  title,
  focus,
  onCreatedTask,
  onOpenDetails,
}) => {
  const [cardTitle, setCardTitle] = React.useState<string>("");
  const [hover, setHover] = React.useState(false);
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
    <KabanCardWrapper draggable onClick={() => onOpenDetails?.(id)}>
      {title ? (
        <Flex onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <Flex.Item hAlign="flex-start">
            <H4>{title}</H4>
          </Flex.Item>
          {hover && (
            <Flex.Item hAlign="flex-start" vAlign="flex-start" noGrow>
              <FaIcon.Options size="sm" color={Colors.Gray} style={{ cursor: "pointer" }} />
            </Flex.Item>
          )}
        </Flex>
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
