import { Layout, LayoutMain } from "@components/layout";
import { SidebarContainer } from "@containers/sidebar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <Layout>
      <SidebarContainer />
      <LayoutMain>
        <Outlet />
      </LayoutMain>
    </Layout>
  );
};
