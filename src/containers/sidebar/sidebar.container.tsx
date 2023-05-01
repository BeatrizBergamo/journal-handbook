import React from "react";
import { Sidebar } from "@components/sidebar";

export const SidebarContainer: React.FC = () => {
  return (
    <Sidebar>
      <Sidebar.Item title="Item 1" icon="Book" />
    </Sidebar>
  );
};
