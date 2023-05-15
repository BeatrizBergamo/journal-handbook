import React from "react";

import { CreateWishlistCard, WishlistCard } from "@components/card";
import { Carousel } from "@components/carousel";
import { strings } from "@components/constants";
import { Modal } from "@components/modal";
import { H1 } from "@components/typography";
import { WishlistModalContainer } from "@containers/wishlist-modal";
import { useNavigate } from "react-router-dom";
import { WishlistCategoryModel } from "@domain/model";

export const WishlistPage = () => {
  const [show, setShow] = React.useState(false);
  const [cards, setCards] = React.useState<WishlistCategoryModel[]>([]);
  const navigate = useNavigate();

  function handleClick(categoryId: string) {
    navigate(`/wishlist/kanban/${categoryId}`, { replace: true });
  }

  function handleCreateCard(data: { title: string; description?: string }) {
    setCards((prev) => [...prev, data]);
    setShow(false);
  }

  return (
    <>
      <H1>{strings.wishlist.title}</H1>
      <Carousel>
        {cards.map((card) => (
          <WishlistCard key={card.title} title={card.title} description={card.description} onClick={handleClick} />
        ))}
        <CreateWishlistCard onClick={() => setShow(true)} />
      </Carousel>
      <WishlistModalContainer show={show} onCancel={setShow} onCompleted={handleCreateCard} />
    </>
  );
};
