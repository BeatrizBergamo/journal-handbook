import React from "react";
import { TextAreaFieldStyled } from "./text-field.component.styled";
import { FormFieldContext } from "@components/form";

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  onValueChange?(value: string): void;
  resizable?: boolean;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({ onValueChange, resizable, ...props }) => {
  const formFieldContext = React.useContext(FormFieldContext);

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    if (props.onChange) {
      props.onChange(event);
      return;
    }

    const value = event.target.value;

    if (formFieldContext) {
      formFieldContext.onValueChange(value);
    }

    onValueChange?.(value);
  }

  return (
    <TextAreaFieldStyled
      {...props}
      resizable={resizable}
      value={props.value?.toString() ?? formFieldContext?.value?.toString() ?? ""}
      onChange={handleChange}
    />
  );
};
