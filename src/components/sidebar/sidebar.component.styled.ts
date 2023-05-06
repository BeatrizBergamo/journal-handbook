import { Border, Colors, Spacing } from "@components/constants";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface SidebarWrapperProps {
  short?: boolean;
}

export const SidebarWrapper = styled.aside<SidebarWrapperProps>`
  min-width: ${(props) => (props.short ? "50px" : "15%")};
  height: 100%;
  background-color: ${Colors.GrayXLight};
  border-right: ${Border.Width} solid ${Colors.GrayLight};
  padding-block: ${Spacing.Small};
  padding-inline: ${Spacing.Small};
`;

export const SidebarItemWrapper = styled(NavLink)`
  text-decoration: none;
`;
