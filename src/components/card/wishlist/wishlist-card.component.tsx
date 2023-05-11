import { BodySecondary, H3 } from "@components/typography";
import React from "react";
import { CardImage, WishlistCardContentWrapper, WishlistCardWrapper } from "./wishlist-card.component.styled";
import { Separator } from "@components/box";
import { Spacing } from "@components/constants";

interface WishlistCardProps {
  title: string;
  description: string;
  imageUrl?: string;
  onClick?: VoidFunction;
}

export const WishlistCard: React.FC<WishlistCardProps> = ({ title, description, imageUrl, onClick }) => {
  return (
    <WishlistCardWrapper onClick={onClick}>
      <CardImage src={imageUrl} />
      <WishlistCardContentWrapper>
        <H3>{title}</H3>
        <Separator size={Spacing.Small} />
        <BodySecondary>{description}</BodySecondary>
      </WishlistCardContentWrapper>
    </WishlistCardWrapper>
  );
};
