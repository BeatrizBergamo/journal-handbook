import React from "react";

import { FaIcon } from "@components/fa-icon";
import { Flex } from "@components/flex";
import { H3 } from "@components/typography";
import { SidebarItemWrapper } from "./sidebar.component.styled";
import { Colors, Spacing } from "@components/constants";

interface SidebarItemProps {
  title: string;
  icon: keyof typeof FaIcon;
  selected?: boolean;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon, selected }) => {
  const Icon = FaIcon[icon];
  const color = selected ? Colors.GrayDark : Colors.Gray;

  return (
    <SidebarItemWrapper>
      <Flex>
        <Flex.Item noGrow hAlign="center">
          <FaIcon.ChevronRight size={"xs"} color={color} />
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
    </SidebarItemWrapper>
  );
};
