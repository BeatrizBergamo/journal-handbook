import { Separator } from "@components/box";
import { Button } from "@components/button";
import { strings } from "@components/constants";
import { Flex } from "@components/flex";
import { Form, FormData } from "@components/form";
import { TextAreaField, TextField } from "@components/text-field";
import { H2 } from "@components/typography";
import React from "react";

interface WishlistModalContainerProps {
  onCompleted(data: { title: string; description?: string }): void;
  onCancel(open: false): void;
}

export const WishlistModalContainer: React.FC<WishlistModalContainerProps> = ({ onCompleted, onCancel }) => {
  function handleSubmit(formData: FormData<{ title: string; description?: string }>) {
    if (Object.keys(formData.errors).length === 0) {
      onCompleted(formData.data);
    }
  }

  function required(value: string | number | null) {
    if (!value) {
      return { message: strings.form.required };
    }
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
        <Flex>
          <Flex.Item />
          <Flex.Item noGrow>
            <Button variant="callToAction" type="submit">
              {strings.button.confirm}
            </Button>
          </Flex.Item>
          <Flex.Separator />
          <Flex.Item noGrow>
            <Button variant="neutral" onClick={() => onCancel(false)}>
              {strings.button.cancel}
            </Button>
          </Flex.Item>
          <Flex.Item />
        </Flex>
      </Form>
    </>
  );
};
