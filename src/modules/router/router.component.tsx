import { KanbanContainer } from "@containers/kanban";
import { AppLayout } from "modules/layout";
import { WishlistPage } from "modules/wishlist";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { appRoutes } from "./app-routes";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path={appRoutes.wishlist} element={<WishlistPage />} />
          <Route path={`${appRoutes.kanban}/:categoryId`} element={<KanbanContainer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
