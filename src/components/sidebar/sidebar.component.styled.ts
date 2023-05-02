import { Colors, Shadow, Spacing } from "@components/constants";
import styled from "styled-components";

interface SidebarWrapperProps {
  short?: boolean;
}

export const SidebarWrapper = styled.aside<SidebarWrapperProps>`
  width: ${(props) => (props.short ? "50px" : "15%")};
  height: 100%;
  background-color: ${Colors.White};
  box-shadow: ${Shadow.Light};
  padding-block: ${Spacing.XSmall};
  padding-inline: ${Spacing.Small};
`;

export const SidebarItemWrapper = styled.div`
  cursor: pointer;
`;
