import { Separator } from "@components/box";
import { strings } from "@components/constants";
import { Form, FormData } from "@components/form";
import { TextAreaField, TextField } from "@components/text-field";
import { H2 } from "@components/typography";

export const WishlistModalContainer = () => {
  function handleSubmit(formData: FormData<{ title: string; description?: string }>) {
    console.log(formData);
  }

  function required(value: string | number | null) {
    if (!value) {
      return { message: "Campo obrigatório!" };
    }

    return null;
  }

  return (
    <>
      <H2>{strings.wishlist.modal.title}</H2>
      <Form onSubmit={handleSubmit}>
        <Form.Field name="title" label={strings.wishlist.modal.label.title} validators={[required]}>
          <TextField placeholder={strings.wishlist.modal.placeholder.title} />
        </Form.Field>
        <Separator />
        <Form.Field name="description" label={strings.wishlist.modal.label.description}>
          <TextAreaField resizable={false} placeholder={strings.wishlist.modal.placeholder.description} />
        </Form.Field>
      </Form>
    </>
  );
};
