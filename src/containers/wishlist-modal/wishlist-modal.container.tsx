import React from "react";

import { Separator } from "@components/box";
import { Button } from "@components/button";
import { appStrings } from "@components/constants";
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

const strings = appStrings.wishlist.modal;

export const WishlistModalContainer: React.FC<WishlistModalContainerProps> = (props) => {
  function handleSubmit(formData: FormData<WishlistCategoryModel>) {
    if (!Object.keys(formData.errors).length) {
      props.onCompleted(formData.data);
    }
  }

  return (
    <Modal show={props.show} onClose={props.onCancel} type="normal">
      <H2>{strings.title}</H2>
      <Form onSubmit={handleSubmit}>
        <Form.Field name="title" label={strings.label.title} validators={[FormValidators.Required]}>
          <TextField placeholder={strings.placeholder.title} />
        </Form.Field>
        <Separator />
        <Form.Field name="description" label={strings.label.description}>
          <TextAreaField placeholder={strings.placeholder.description} />
        </Form.Field>
        <Flex>
          <Flex.Item />
          <Flex.Item noGrow>
            <Button variant="callToAction" type="submit">
              {appStrings.button.confirm}
            </Button>
          </Flex.Item>
          <Flex.Separator />
          <Flex.Item noGrow>
            <Button variant="neutral" onClick={() => props.onCancel(false)}>
              {appStrings.button.cancel}
            </Button>
          </Flex.Item>
          <Flex.Item />
        </Flex>
      </Form>
    </Modal>
  );
};
