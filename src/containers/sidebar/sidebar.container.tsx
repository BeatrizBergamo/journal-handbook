import React from "react";
import { Sidebar } from "@components/sidebar";

export const SidebarContainer: React.FC = () => {
  return (
    <Sidebar>
      <Sidebar.Item title="Lista de desejos" icon="Book" selected />
      <Sidebar.Item title="To do list" icon="Book" />
      <Sidebar.Item title="Linha do tempo" icon="Book" />
    </Sidebar>
  );
};
