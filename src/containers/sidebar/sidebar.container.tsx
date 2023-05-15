import React from "react";
import { Sidebar } from "@components/sidebar";

export const SidebarContainer: React.FC = () => {
  return (
    <Sidebar>
      <Sidebar.Item title="Lista de desejos" icon="Book" path="/wishlist" />
      <Sidebar.Item title="To do list" icon="Book" path="/todo" />
      <Sidebar.Item title="Linha do tempo" icon="Book" path="/timeline" />
    </Sidebar>
  );
};
