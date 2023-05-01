import * as React from "react";
import { GlobalStyles } from "@components/global";
import { Layout, LayoutMain } from "@components/layout";
import { SidebarContainer } from "@containers/sidebar";
import { KanbanContainer } from "@containers/kanban";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Layout>
        <SidebarContainer />
        <LayoutMain>
          <KanbanContainer />
        </LayoutMain>
      </Layout>
    </React.Fragment>
  );
};
