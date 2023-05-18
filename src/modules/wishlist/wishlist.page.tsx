import React from "react";

import { CreateWishlistCard, WishlistCard } from "@components/card";
import { Carousel } from "@components/carousel";
import { strings } from "@components/constants";
import { H1 } from "@components/typography";
import { WishlistModalContainer } from "@containers/wishlist-modal";
import { WishlistCategoryModel } from "@domain/model";
import { useNavigate } from "react-router-dom";
import { categoryMock } from "@data/mock";

export const WishlistPage = () => {
  const [show, setShow] = React.useState(false);
  const [cards, setCards] = React.useState<WishlistCategoryModel[]>(categoryMock.categories);
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
        {cards.map((card, index) => (
          <WishlistCard
            key={card.title}
            id={index + 1}
            title={card.title}
            description={card.description}
            onClick={handleClick}
          />
        ))}
        <CreateWishlistCard onClick={() => setShow(true)} />
      </Carousel>
      <WishlistModalContainer show={show} onCancel={setShow} onCompleted={handleCreateCard} />
    </>
  );
};
