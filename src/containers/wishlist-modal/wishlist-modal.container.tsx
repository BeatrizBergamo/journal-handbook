import { Separator } from "@components/box";
import { strings } from "@components/constants";
import { H2 } from "@components/typography";

export const WishlistModalContainer = () => {
  return (
    <>
      <H2>{strings.wishlist.modal.title}</H2>
      <Form onSubmit={handleSubmit}>
        <Form.Field label={strings.wishlist.modal.label.title} validators={[FormValidator.Required]}>
          <TextField placeholder={strings.wishlist.modal.placeholder.title} />
        </Form.Field>
        <Separator />
        <Form.Field label={strings.wishlist.modal.label.description}>
          <TextAreaField placeholder={strings.wishlist.modal.placeholder.description} />
        </Form.Field>
      </Form>
    </>
  );
};
