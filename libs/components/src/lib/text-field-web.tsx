import { TextField } from '@material-ui/core';
import React from 'react';

export type TextFieldWebProps = {
  onChange?(event: React.ChangeEvent): void;
  onClick?(): void;
  onBlur?(): void;
  label: string;
  testId?: string;
};

export function TextFieldWeb({
  onChange,
  onClick,
  onBlur,
  label,
  testId,
}: TextFieldWebProps) {
  return (
    <TextField
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      label={label}
      inputProps={{
        'data-testid': testId,
      }}
    />
  );
}
