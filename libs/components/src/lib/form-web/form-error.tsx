import { TypographyWeb } from '@components';
import { useTheme } from '@material-ui/core';

type FormErrorProps = { error: { message: string } };

export function FormError({ error }: FormErrorProps) {
  const { palette } = useTheme();

  return (
    <TypographyWeb
      variant="body1"
      color={palette.error.main}
      fontSize="0.875rem"
      marginTop={1}
    >
      {error}
    </TypographyWeb>
  );
}
