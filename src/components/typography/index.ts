import { FontSize, FontFamily, FontWeight, Colors, Spacing } from "@components/constants";
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: ${FontSize.XLarge};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  color: ${Colors.Blue};
  margin-block-start: ${Spacing.Medium};
  margin-block-end: ${Spacing.Small};
  line-height: 1.2;
`;

export const H2 = styled.h2`
  color: ${Colors.GrayDark};
  font-size: ${FontSize.Large};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Bold};
  margin-block-start: ${Spacing.Small};
  margin-block-end: ${Spacing.Small};
`;

export const H3 = styled.h3<{ color?: Colors }>`
  color: ${(props) => props.color ?? Colors.GrayDark};
  font-size: ${FontSize.Small};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Regular};
`;

export const Label = styled.label<{ color?: string }>`
  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Regular};
  color: ${(props) => props.color ?? Colors.GrayDark};
`;

export const Body = styled.p`
  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Medium};
  color: ${Colors.Gray};
`;

export const BodySecondary = styled.p`
  font-size: ${FontSize.XSmall};
  font-family: ${FontFamily.Primary};
  font-weight: ${FontWeight.Regular};
  color: ${Colors.Gray};
`;
