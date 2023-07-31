import { appStrings } from "@components/constants";

export type Validator = (value: number | string | null) => { message: string } | undefined | null;

const strings = appStrings.form.validators;

export class FormValidators {
  static Required: Validator = (value: number | string | null) => {
    if (!value) {
      return { message: strings.required };
    }
  };
}
