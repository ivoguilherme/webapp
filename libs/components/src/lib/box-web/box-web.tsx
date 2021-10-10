import { Box, BoxProps } from '@material-ui/core';

export function BoxWeb({ children, ...otherProps }: BoxProps) {
  return <Box {...otherProps}>{children}</Box>;
}
