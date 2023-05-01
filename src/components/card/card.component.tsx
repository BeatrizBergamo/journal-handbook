import { Body } from "@components/typography";
import React from "react";
import { CardTitle, CardWrapper } from "./card.component.styled";
import { strings } from "@components/constants";

interface CardProps {
  title?: string;
}

export const Card: React.FC<CardProps> = ({ title }) => {
  const [cardTitle, setCardTitle] = React.useState<string>();

  function handleChange(event: React.ChangeEvent<HTMLDivElement>) {
    console.log(event.target.textContent);
    setCardTitle(event.target.textContent ?? "");
  }

  function handleFocus(event: React.FocusEvent<HTMLDivElement>) {
    if (!cardTitle) {
      event.currentTarget.textContent = "";
    }
  }

  return (
    <CardWrapper>
      {title ? (
        <Body>{title}</Body>
      ) : (
        <CardTitle
          contentEditable="true"
          placeholder={strings.card.placeholder}
          onInput={handleChange}
          onFocus={handleFocus}
        >
          {cardTitle ?? strings.card.placeholder}
        </CardTitle>
      )}
    </CardWrapper>
  );
};
