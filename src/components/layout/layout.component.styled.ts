import { Colors, Spacing } from "@components/constants";
import styled from "styled-components";

export const LayoutWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  display: flex;
`;

export const LayoutMainWrapper = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: ${Colors.White};
  padding-inline: ${Spacing.Large};
  overflow: hidden;
`;
