import * as ReactDOM from 'react-dom';
import Routes from './routes';
import { StrictMode } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { defaultTheme } from './theme/defaultTheme';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <Routes />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);
