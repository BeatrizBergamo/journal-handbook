import { strings } from "@components/constants";

export type Validator = (value: number | string | null) => { message: string } | undefined | null;

export class FormValidators {
  static Required: Validator = (value: number | string | null) => {
    if (!value) {
      return { message: strings.form.validators.required };
    }
  };
}
