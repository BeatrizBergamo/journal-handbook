import { FontSize, FontFamily, FontWeight, Colors, Spacing } from "@components/constants";
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${FontSize.Large};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  color: ${Colors.Blue};
  margin-block-start: ${Spacing.Medium};
  margin-block-end: ${Spacing.Small};
  line-height: 1.2;
`;

export const H3 = styled.h3`
  color: ${Colors.GrayDark};
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Regular};
`;

export const Label = styled.label`
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Regular};
  color: ${Colors.GrayDark};
  line-height: 1.5;
`;
