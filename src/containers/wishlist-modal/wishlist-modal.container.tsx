import React from "react";

import { Separator } from "@components/box";
import { Button } from "@components/button";
import { strings } from "@components/constants";
import { Flex } from "@components/flex";
import { Form, FormData, FormValidators } from "@components/form";
import { Modal } from "@components/modal";
import { TextAreaField, TextField } from "@components/text-field";
import { H2 } from "@components/typography";
import { WishlistCategoryModel } from "@domain/model";

interface WishlistModalContainerProps {
  onCompleted(data: WishlistCategoryModel): void;
  onCancel(open: false): void;
  show: boolean;
}

export const WishlistModalContainer: React.FC<WishlistModalContainerProps> = ({ onCompleted, onCancel, show }) => {
  function handleSubmit(formData: FormData<WishlistCategoryModel>) {
    if (Object.keys(formData.errors).length === 0) {
      onCompleted(formData.data);
    }
  }

  return (
    <Modal show={show} onClose={onCancel} type="normal">
      <H2>{strings.wishlist.modal.title}</H2>
      <Form onSubmit={handleSubmit}>
        <Form.Field name="title" label={strings.wishlist.modal.label.title} validators={[FormValidators.Required]}>
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
    </Modal>
  );
};
