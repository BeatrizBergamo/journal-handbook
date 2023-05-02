import { Spacing } from "@components/constants";
import styled from "styled-components";

export const Carousel = styled.div`
  display: flex;
  gap: ${Spacing.Large};
  overflow-x: auto;
  width: auto;
  padding: ${Spacing.Small};

  /* width */
  &::-webkit-scrollbar {
    height: 10px;
    background: #f1f1f1;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    /* background: #555; */
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #555;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
