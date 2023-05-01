import { Colors, Spacing } from "@components/constants";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
`;

export const LayoutMainWrapper = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: ${Colors.White};
  padding-inline: ${Spacing.Medium};
`;
