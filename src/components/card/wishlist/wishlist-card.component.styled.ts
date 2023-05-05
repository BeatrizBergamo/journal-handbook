import { Border, Colors, Shadow, Spacing } from "@components/constants";
import styled from "styled-components";

const wishlistCardHeight = "200px";
const wishlistCardWidth = "220px";

export const WishlistCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Colors.White};
  border-radius: ${Border.RadiusLarge};
  box-shadow: ${Shadow.Light};
  height: ${wishlistCardHeight};
  width: ${wishlistCardWidth};
  overflow: hidden;
  cursor: pointer;
`;

export const WishlistCardContentWrapper = styled.div`
  flex: 3;
  padding: ${Spacing.Small};
`;

export const CardImage = styled.div<{ src?: string }>`
  flex: 5;
  background-image: ${(props) => props.src ?? ""};
  background-color: ${Colors.GrayLight};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;
