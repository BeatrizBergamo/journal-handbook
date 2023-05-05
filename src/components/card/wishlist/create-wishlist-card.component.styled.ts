import { Colors } from "@components/constants";
import styled from "styled-components";
import { WishlistCardWrapper } from "./wishlist-card.component.styled";

export const CreateWishlistCardWrapper = styled(WishlistCardWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${Colors.GrayXLight};
  cursor: pointer;

  &:hover {
    background-color: ${Colors.GrayLight};
  }
`;
