import React from "react";
import { FormContext, FormData } from "./form.context";
import { FormField } from "./form-field.component";

interface FormProps {
  onSubmit(formData: FormData): void;
  children?: React.ReactNode;
}

const FormComponent = ({ children, onSubmit }: FormProps) => {
  const formData = React.useRef<{ [fieldName: string]: any }>({});

  const register = React.useCallback(
    (field: any) => {
      formData.current[field.props.name] = field;
    },
    [formData]
  );

  const unregister = React.useCallback(
    (field: any) => {
      delete formData.current[field.props.name];
    },
    [formData]
  );

  function handleSubmit() {
    const formData = getFormData();

    onSubmit(formData);
  }

  function getFormData(): FormData<any> {
    return Object.keys(formData.current).reduce<FormData<any>>(
      (form, name) => {
        const field = formData.current[name];

        if (field.props.validate) {
          const valid = field.props.validate(field.props.value);
          if (valid.message) {
            form.errors[name] = valid.message;
          }
        }

        form.data[name] = field.props.value;
        return form;
      },
      { data: null, errors: null }
    );
  }

  return (
    <FormContext.Provider value={{ register, unregister }}>
      <form onSubmit={handleSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

FormComponent.Field = FormField;

export const Form = FormComponent;
