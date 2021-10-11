import { ThemeProvider } from '@material-ui/core';
import { AuthenticationContainer } from './container';
import { authenticationTheme } from './theme/authenticationTheme';
import StepProvider from './providers/StepProvider';

export function Authentication() {
  return (
    <ThemeProvider theme={authenticationTheme}>
      <StepProvider>
        <AuthenticationContainer />
      </StepProvider>
    </ThemeProvider>
  );
}
