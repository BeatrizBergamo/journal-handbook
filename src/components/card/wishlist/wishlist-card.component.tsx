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

export const WishlistCard: React.FC<WishlistCardProps> = ({
  id,
  title,
  description,
  imageUrl,
  onClick,
}) => {
  return (
    <WishlistCardWrapper onClick={() => onClick(id)}>
      <CardImage src={imageUrl} />
      <WishlistCardContentWrapper>
        <H3>{title}</H3>
        <Separator size={Spacing.Small} />
        {description && <BodySecondary>{description}</BodySecondary>}
      </WishlistCardContentWrapper>
    </WishlistCardWrapper>
  );
};
