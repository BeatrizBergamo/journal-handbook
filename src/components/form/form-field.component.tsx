import { Separator } from "@components/box";
import { Spacing } from "@components/constants";
import { Caption, Label } from "@components/typography";
import React from "react";
import { FormFieldWrapper } from "./form-field.component.styled";
import { FormContext, FormFieldContext, FormFieldContextProps, Validator } from "./form.context";

interface FormFieldProps {
  name: string;
  label?: string;
  validators?: Validator[];
  children?: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = (props) => {
  const formContext = React.useContext(FormContext);

  if (!formContext) {
    throw new Error("FormField must be used with Form component");
  }

  const [value, setValue] = React.useState<number | string | null>(null);

  const formFieldData = React.useRef<FormFieldContextProps>({
    name: props.name,
    validators: props.validators,
    errors: [],
    value,
    onValueChange: setValue,
  });

  return (
    <FormFieldContext.Provider value={formFieldData.current}>
      <FormFieldWrapper>
        {props.label && (
          <>
            <Label>{props.label}</Label>
            <Separator size={Spacing.Small} />
          </>
        )}
        {props.children}
        {formFieldData.current.errors.map((error, index) => (
          <Caption key={index}>{error.message}</Caption>
        ))}
      </FormFieldWrapper>
    </FormFieldContext.Provider>
  );
};
