import { Button as ButtonMui } from '@material-ui/core';
import { ButtonWebProps } from '../../types';

export function ButtonWeb({ testId, ...props }: ButtonWebProps) {
  return (
    <ButtonMui data-testid={testId} {...props}>
      {props.children}
    </ButtonMui>
  );
}
