import React from 'react';

import { FormFieldContext } from '@components/form';
import { TextInputStyled } from './text-field.component.styled';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?(value: string | number): void;
}

export const TextField: React.FC<TextFieldProps> = ({ onValueChange, ...props }) => {
  const formFieldContext = React.useContext(FormFieldContext);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (props.onChange) {
      props.onChange(event);
      return;
    }

    const value = event.target.value;
    const parsedValue = props.type === 'number' ? +value : value;

    if (formFieldContext) {
      formFieldContext.onValueChange(parsedValue);
    }

    onValueChange?.(parsedValue);
  }

  return (
    <TextInputStyled
      {...props}
      value={props.value?.toString() ?? formFieldContext?.value?.toString() ?? ''}
      onChange={handleChange}
    />
  );
};
