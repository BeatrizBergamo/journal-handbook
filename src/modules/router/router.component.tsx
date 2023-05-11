import { KanbanContainer } from "@containers/kanban";
import { AppLayout } from "modules/layout";
import { WishlistPage } from "modules/wishlist";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="wishlist/kanban/:categoryId" element={<KanbanContainer />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
