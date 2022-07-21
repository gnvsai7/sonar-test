import { addDecorator } from '@storybook/react';
import theme from '../src/theme/theme';
import CssBaseline from '@mui/material/CssBaseline';

import { StylesProvider } from '@mui/styles';
import { StyledEngineProvider, ThemeProvider } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from 'emotion-theming';
import { QueryClient, QueryClientProvider } from 'react-query';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient();
addDecorator((Story) => (
  <QueryClientProvider client={queryClient}>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            <Story />
          </ThemeProvider>
        </StyledEngineProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </QueryClientProvider>
));
