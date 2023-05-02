import { Border, Colors, FontFamily, FontSize, FontWeight, Shadow, Spacing } from "@components/constants";
import styled from "styled-components";

export const KabanCardWrapper = styled.div`
  border: ${Border.Width} solid ${Colors.Gray};
  border-radius: ${Border.Radius};
  padding: ${Spacing.XSmall} ${Spacing.Small};
  box-shadow: ${Shadow.Light};
`;

export const KanbanCardTitle = styled.div<{ selected: boolean }>`
  border: none;
  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  color: ${Colors.GrayDark};

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.selected &&
    `
    &::after {
      content: attr(placeholder);
    }
  `}
`;
