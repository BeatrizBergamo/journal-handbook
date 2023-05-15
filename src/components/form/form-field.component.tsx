import React from "react";

import { Separator } from "@components/box";
import { Spacing } from "@components/constants";
import { Caption, Label } from "@components/typography";
import { FormFieldWrapper } from "./form-field.component.styled";
import { Validator } from "./form-validators";
import { FormContext, FormFieldContext, FormFieldContextProps } from "./form.context";

interface FormFieldProps {
  name: string;
  label?: string;
  validators?: Validator[];
  children?: React.ReactNode;
}

export const FormField: React.FC<FormFieldProps> = (props) => {
  const formContext = React.useContext(FormContext);
  const [error, setError] = React.useState<string>();

  if (!formContext) {
    throw new Error("FormField must be used with Form component");
  }

  const [value, setValue] = React.useState<number | string | null>(null);

  const formFieldData = React.useMemo<FormFieldContextProps>(
    () => ({
      name: props.name,
      validators: props.validators,
      errors: error ? [error] : [],
      value,
      onError: setError,
      onValueChange: setValue,
    }),
    [props, value, setValue],
  );

  React.useEffect(() => {
    formContext?.register(formFieldData);

    return () => formContext?.unregister(formFieldData);
  }, [formFieldData]);

  return (
    <FormFieldContext.Provider value={formFieldData}>
      <FormFieldWrapper>
        {props.label && (
          <>
            <Label>{props.label}</Label>
            <Separator size={Spacing.XSmall} />
          </>
        )}
        {props.children}
        {error && (
          <>
            <Separator size={Spacing.XSmall} />
            <Caption>{error}</Caption>
          </>
        )}
      </FormFieldWrapper>
    </FormFieldContext.Provider>
  );
};
