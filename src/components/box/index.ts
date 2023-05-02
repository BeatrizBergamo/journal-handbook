import { Border, Colors, Spacing } from "@components/constants";
import styled from "styled-components";

export const Separator = styled.div<{ size?: Spacing }>`
  margin-block-end: ${(props) => props.size ?? Spacing.Medium};
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: ${Border.Width} solid ${Colors.GrayLight};
`;
