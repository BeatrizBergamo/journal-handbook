import { CreateWishlistCard } from "@components/card";
import { Carousel } from "@components/carousel";
import { strings } from "@components/constants";
import { Flex } from "@components/flex";
import { Modal } from "@components/modal";
import { H1 } from "@components/typography";
import React from "react";

export const WishlistPage = () => {
  const [show, setShow] = React.useState(false);

  return (
    <>
      <H1>{strings.wishlist.title}</H1>
      <Carousel>
        <Flex.Item noGrow>
          <CreateWishlistCard onClick={() => setShow(true)} />
        </Flex.Item>
      </Carousel>
      <Modal show={show} onClose={setShow} type="normal">
        {/* TODO - Implement into modal to create the form witch witll create a new category */}
      </Modal>
    </>
  );
};
