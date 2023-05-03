import { Border, Colors, Spacing } from "@components/constants";
import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  width: 100%;
  gap: ${Spacing.Large};
  overflow-x: auto;
  padding: ${Spacing.Small};

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
