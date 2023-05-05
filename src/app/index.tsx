import * as React from "react";

import { GlobalStyles } from "@components/global";
import { Layout, LayoutMain } from "@components/layout";
import { SidebarContainer } from "@containers/sidebar";
import { Router } from "modules/router";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Layout>
        <SidebarContainer />
        <LayoutMain>
          <Router />
        </LayoutMain>
      </Layout>
    </React.Fragment>
  );
};
