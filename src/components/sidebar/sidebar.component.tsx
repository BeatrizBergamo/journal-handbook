import React from "react";
import { SidebarItem } from "./sidebar-item.component";
import { SidebarWrapper } from "./sidebar.component.styled";

interface SidebarComponentProps {
  short?: boolean;
  children: React.ReactNode;
}

const SidebarComponent = ({ children, short }: SidebarComponentProps) => {
  return <SidebarWrapper short={short}>{short ? null : children}</SidebarWrapper>;
};

SidebarComponent.Item = SidebarItem;

export const Sidebar: typeof SidebarComponent & { Item?: typeof SidebarItem } = SidebarComponent;
