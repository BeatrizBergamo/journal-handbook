import { CreateWishlistCard, WishlistCard } from "@components/card";
import { Carousel } from "@components/carousel";
import { Spacing, strings } from "@components/constants";
import { Flex } from "@components/flex";
import { H1, H2 } from "@components/typography";

export const WishlistPage = () => {
  return (
    <>
      <H1>{strings.wishlist.title}</H1>
      <Carousel>
        <Flex.Item noGrow>
          <CreateWishlistCard />
        </Flex.Item>
      </Carousel>
    </>
  );
};
