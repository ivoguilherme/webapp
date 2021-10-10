import { Input, TextField } from '@material-ui/core';
import { TextFieldWebProps } from '../../types';

export function TextFieldWeb({
  onChange,
  onClick,
  onBlur,
  label,
  testId,
  type = 'text',
  InputProps,
  inputProps,
  autoComplete,
  error,
  helperText,
}: TextFieldWebProps) {
  return (
    <TextField
      fullWidth
      onChange={onChange}
      onClick={onClick}
      onBlur={onBlur}
      label={label}
      type={type}
      error={error}
      autoComplete={autoComplete}
      helperText={helperText}
      inputProps={{
        'data-testid': testId,
        ...inputProps,
      }}
      InputProps={InputProps}
    />
  );
}
