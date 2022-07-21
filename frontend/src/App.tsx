import { ThemeProvider } from '@mui/material';

import React from 'react';
import theme from './theme/theme';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/styled-engine';
import SavedJobsPage from './pages/SavedJobs/index';
import FindJobsPage from './pages/FindJobs';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import EntryPage from './pages/EntryPage/EntryPage';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();
export function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<EntryPage />} />
              <Route path="/savejobs" element={<SavedJobsPage />} />

              <Route path="/findjobs" element={<FindJobsPage />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
