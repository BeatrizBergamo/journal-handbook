import { Colors, FontSize, FontFamily, FontWeight } from "@components/constants";
import styled from "styled-components";

export const TaskTitle = styled.div`
  color: ${Colors.GrayDark};
  font-size: ${FontSize.Large};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};

  &:focus {
    outline: none;
  }
`;
