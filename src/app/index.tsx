import * as React from "react";
import { GlobalStyles } from "@components/global";
import { Layout, LayoutMain } from "@components/layout";
import { SidebarContainer } from "@containers/sidebar";
import { KanbanContainer } from "@containers/kanban";
import { WishlistPage } from "modules/wishlist";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Layout>
        <SidebarContainer />
        <LayoutMain>
          {/* <Router /> */}
          <WishlistPage />
          {/* <KanbanContainer /> */}
        </LayoutMain>
      </Layout>
    </React.Fragment>
  );
};
