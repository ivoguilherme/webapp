export type TextFieldWebProps = {
  onChange?(event: React.ChangeEvent): void;
  onClick?(): void;
  onBlur?(): void;
  label: string;
  testId?: string;
  type?: React.InputHTMLAttributes<unknown>['type'];
  InputProps?: any;
  inputProps?: any;
  autoComplete?: string;
  error?: boolean;
  helperText?: React.ReactNode;
};
