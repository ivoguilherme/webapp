import { Button as ButtonMui } from '@material-ui/core';

export type ButtonWebProps = {
  id?: string;
  testId?: string;
  onClick?(): void;
  children: React.ReactNode;
};

export function ButtonWeb({ testId, ...props }: ButtonWebProps) {
  return (
    <ButtonMui data-testid={testId} {...props}>
      {props.children}
    </ButtonMui>
  );
}
