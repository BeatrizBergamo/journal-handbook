import React from "react";

import { CreateWishlistCard, WishlistCard } from "@components/card";
import { Carousel } from "@components/carousel";
import { strings } from "@components/constants";
import { Modal } from "@components/modal";
import { H1 } from "@components/typography";
import { useNavigate } from "react-router-dom";

export const WishlistPage = () => {
  const [show, setShow] = React.useState(false);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/wishlist/kanban/1", { replace: true });
  }

  return (
    <>
      <H1>{strings.wishlist.title}</H1>
      <Carousel>
        <WishlistCard title="Categoria 1" description="Descricao da categoria 1" onClick={handleClick} />
        <CreateWishlistCard onClick={() => setShow(true)} />
      </Carousel>
      <Modal show={show} onClose={setShow} type="normal">
        {/* TODO - Implement into modal to create the form witch witll create a new category */}
      </Modal>
    </>
  );
};
