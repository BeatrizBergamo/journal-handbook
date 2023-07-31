import React from "react";

import { Separator } from "@components/box";
import { Spacing } from "@components/constants";
import { BodySecondary, H3 } from "@components/typography";
import { CategoryId } from "@domain/model";
import {
  CardImage,
  WishlistCardContentWrapper,
  WishlistCardWrapper,
} from "./wishlist-card.component.styled";

interface WishlistCardProps {
  id: CategoryId;
  title: string;
  description?: string;
  imageUrl?: string;
  onClick(id: CategoryId): void;
}

export const WishlistCard: React.FC<WishlistCardProps> = (props) => {
  return (
    <WishlistCardWrapper onClick={() => props.onClick(props.id)}>
      <CardImage src={props.imageUrl} />
      <WishlistCardContentWrapper>
        <H3>{props.title}</H3>
        <Separator size={Spacing.Small} />
        {props.description && <BodySecondary>{props.description}</BodySecondary>}
      </WishlistCardContentWrapper>
    </WishlistCardWrapper>
  );
};
