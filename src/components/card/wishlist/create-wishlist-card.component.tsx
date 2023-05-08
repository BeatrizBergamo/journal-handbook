import { Colors } from "@components/constants";
import { FaIcon } from "@components/fa-icon";
import { Flex } from "@components/flex";
import { Body } from "@components/typography";
import { CreateWishlistCardWrapper } from "./create-wishlist-card.component.styled";
import React from "react";

export const CreateWishlistCard = ({ onClick }: { onClick: VoidFunction }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <CreateWishlistCardWrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={onClick}
    >
      <FaIcon.Plus size="4x" color={hover ? Colors.GrayDark : Colors.Gray} />
      <Flex>
        <Flex.Item>
          <Body style={{ color: hover ? Colors.GrayDark : Colors.Gray }}>Adicionar nova categoria</Body>
        </Flex.Item>
      </Flex>
    </CreateWishlistCardWrapper>
  );
};
