import React from "react";
import { LayoutMainWrapper, LayoutWrapper } from "./layout.component.styled";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export const LayoutMain: React.FC<React.PropsWithChildren> = ({ children }) => {
  return <LayoutMainWrapper>{children}</LayoutMainWrapper>;
};
