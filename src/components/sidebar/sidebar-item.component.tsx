import React from "react";

import { FaIcon } from "@components/fa-icon";
import { Flex } from "@components/flex";
import { H3 } from "@components/typography";
import { SidebarItemWrapper } from "./sidebar.component.styled";
import { Colors, Spacing } from "@components/constants";
import { Separator } from "@components/box";
import { useLocation } from "react-router-dom";

interface SidebarItemProps {
  title: string;
  icon: keyof typeof FaIcon;
  path: string;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon, path }) => {
  const { pathname } = useLocation();

  let selected = false;
  if (pathname.includes(path)) {
    selected = true;
  }

  const Icon = FaIcon[icon];
  const color = selected ? Colors.GrayDark : Colors.Gray;

  return (
    <SidebarItemWrapper to={path}>
      <Flex>
        <Flex.Item noGrow hAlign="center">
          <FaIcon.ChevronRight size="2xs" color={color} />
        </Flex.Item>
        <Flex.Separator size={Spacing.Small} />
        <Flex.Item noGrow>
          <Icon color={color} />
        </Flex.Item>
        <Flex.Separator />
        <Flex.Item vAlign="flex-start">
          <H3 color={color}>{title}</H3>
        </Flex.Item>
      </Flex>
      <Separator size={Spacing.Small} />
    </SidebarItemWrapper>
  );
};
