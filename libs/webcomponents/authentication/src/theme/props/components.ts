import { Components } from '@material-ui/core/styles/components';

export const components: Components = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
    },
  },
  MuiInputBase: {
    styleOverrides: {
      input: {
        padding: '8px',
      },
    },
  },
};
