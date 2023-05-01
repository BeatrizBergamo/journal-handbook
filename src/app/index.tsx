import * as React from "react";
import { GlobalStyles } from "@components/global";
import { Layout, LayoutMain } from "@components/layout";
import { SidebarContainer } from "@containers/sidebar";

export const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Layout>
        <SidebarContainer />
        <LayoutMain />
      </Layout>
    </React.Fragment>
  );
};
