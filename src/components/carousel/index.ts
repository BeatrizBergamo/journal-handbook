import { Border, Colors, Spacing } from "@components/constants";
import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  gap: ${Spacing.Large};
  width: 100%;
  padding: ${Spacing.Small};
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 10px;
    background: ${Colors.GrayXLight};
    border-radius: ${Border.RadiusLarge};
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.GrayLight};
    border-radius: ${Border.RadiusLarge};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${Colors.Gray};
  }
`;
