import React from "react";

import { CreateWishlistCard, WishlistCard } from "@components/card";
import { Carousel } from "@components/carousel";
import { strings } from "@components/constants";
import { H1 } from "@components/typography";
import { WishlistModalContainer } from "@containers/wishlist-modal";
import { CategoryId, WishlistCategoryModel } from "@domain/model";
import { useNavigate } from "react-router-dom";
import { categoryMock } from "@data/mock";

export const WishlistPage = () => {
  const [show, setShow] = React.useState(false);
  const [cards, setCards] = React.useState<WishlistCategoryModel[]>(categoryMock.categories);
  const navigate = useNavigate();

  function handleClick(categoryId: CategoryId) {
    navigate(`/wishlist/kanban/${categoryId}`, { replace: true });
  }

  function handleCreateCard(data: { title: string; description?: string }) {
    setCards((prev) => [...prev, { ...data, id: prev.length + 1 }]);
    setShow(false);
  }

  return (
    <>
      <H1>{strings.wishlist.title}</H1>
      <Carousel>
        {cards.map((card) => (
          <WishlistCard
            key={card.title}
            id={card.id}
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
