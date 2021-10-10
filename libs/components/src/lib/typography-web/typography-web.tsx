import { Typography, TypographyProps } from '@material-ui/core';

export function TypographyWeb({
  testId,
  children,
  ...props
}: TypographyProps & { testId?: string }) {
  return (
    <Typography data-testid={testId} {...props}>
      {children}
    </Typography>
  );
}
