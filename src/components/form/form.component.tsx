import React from "react";
import { FormContext, FormData, FormFieldContextProps } from "./form.context";
import { FormField } from "./form-field.component";

interface FormProps {
  onSubmit(formData: FormData): void;
  children?: React.ReactNode;
}

const FormComponent = (props: FormProps) => {
  const [formData, setFormData] = React.useState<{ [fieldName: string]: FormFieldContextProps }>(
    {},
  );

  const register = React.useCallback(
    (field: FormFieldContextProps) => {
      setFormData((prev) => ({ ...prev, [field.name]: field }));
    },
    [setFormData],
  );

  const unregister = React.useCallback(
    (field: FormFieldContextProps) => {
      setFormData((prev) =>
        Object.keys(prev).reduce(
          (agg, name) => (name !== field.name ? { ...agg, [name]: prev[name] } : { ...agg }),
          {},
        ),
      );
    },
    [setFormData],
  );

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    const data = getFormData();

    props.onSubmit(data);
  }

  function getFormData(): FormData<any> {
    return Object.keys(formData).reduce<FormData<any>>(
      (form, name) => {
        const field = formData[name];

        if (field.validators) {
          const [error] = field.validators.map((validate) => validate(field.value)).filter(Boolean);

          if (error?.message) {
            form.errors[name] = error.message;
          }
          field.onError(error?.message);
        }

        form.data[name] = field.value;
        return form;
      },
      { data: {}, errors: {} },
    );
  }

  return (
    <FormContext.Provider value={{ register, unregister }}>
      <form onSubmit={handleSubmit}>{props.children}</form>
    </FormContext.Provider>
  );
};

FormComponent.Field = FormField;

export const Form = FormComponent;
