import { WishlistCard } from "@components/card";
import { Carousel } from "@components/carousel";
import { Spacing, strings } from "@components/constants";
import { Flex } from "@components/flex";
import { H1 } from "@components/typography";

export const WishlistPage = () => {
  return (
    <>
      <H1>{strings.wishlist.title}</H1>
      <Carousel>
        <Flex>
          <Flex.Item noGrow>
            <WishlistCard title="Category 1" description="Description of category 1" />
          </Flex.Item>
          <Flex.Separator size={Spacing.Large} />
          <Flex.Item noGrow>
            <WishlistCard title="Category 2" description="Description of category 2" />
          </Flex.Item>
          <Flex.Separator size={Spacing.Large} />
          <Flex.Item noGrow>
            <WishlistCard title="Category 3" description="Description of category 3" />
          </Flex.Item>
          <Flex.Separator size={Spacing.Large} />
          <Flex.Item noGrow>
            <WishlistCard title="Category 4" description="Description of category 4" />
          </Flex.Item>
          <Flex.Separator size={Spacing.Large} />
          <Flex.Item noGrow>
            <WishlistCard title="Category 5" description="Description of category 5" />
          </Flex.Item>
          <Flex.Separator size={Spacing.Large} />
          <Flex.Item noGrow>
            <WishlistCard title="Category 6" description="Description of category 6" />
          </Flex.Item>
          <Flex.Separator size={Spacing.Large} />
          <Flex.Item noGrow>
            <WishlistCard title="Category 7" description="Description of category 7" />
          </Flex.Item>
          <Flex.Separator size={Spacing.Large} />
          <Flex.Item noGrow>
            <WishlistCard title="Category 8" description="Description of category 8" />
          </Flex.Item>
        </Flex>
      </Carousel>
    </>
  );
};
