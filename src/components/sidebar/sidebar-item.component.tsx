import React from "react";

import { FaIcon } from "@components/fa-icon";
import { Flex } from "@components/flex";
import { H3 } from "@components/typography";
import { SidebarItemWrapper } from "./sidebar.component.styled";

interface SidebarItemProps {
  title: string;
  icon: keyof typeof FaIcon;
}

export const SidebarItem: React.FC<SidebarItemProps> = ({ title, icon }) => {
  const [hover, setHover] = React.useState(false);

  function handleHover() {
    setHover(true);
  }

  function handleExitHover() {
    setHover(false);
  }

  const Icon = FaIcon[icon];

  return (
    <SidebarItemWrapper>
      <Flex onMouseEnter={handleHover} onMouseLeave={handleExitHover}>
        <Flex.Item noGrow>
          <Icon />
        </Flex.Item>
        <Flex.Separator />
        <Flex.Item>
          <H3>{title}</H3>
        </Flex.Item>
        {hover && (
          <>
            <Flex.Separator />
            <Flex.Item noGrow>
              <FaIcon.ChevronRight size="1x" />
            </Flex.Item>
          </>
        )}
      </Flex>
    </SidebarItemWrapper>
  );
};
