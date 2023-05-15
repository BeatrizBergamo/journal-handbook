import React from "react";
import { Validator } from "./form-validators";

export interface FormData<T = any> {
  data: T;
  errors: any;
}

interface FormContextProps {
  register(field: any): void;
  unregister(field: any): void;
}

export const FormContext = React.createContext<FormContextProps>({
  register: () => null,
  unregister: () => null,
});

export interface FormFieldContextProps {
  name: string;
  value: string | number | null;
  errors: any[];
  validators?: Validator[];
  onError(error?: string): void;
  onValueChange(value: number | string): void;
}

export const FormFieldContext = React.createContext<FormFieldContextProps | null>(null);
