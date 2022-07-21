/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SavedJobsPage from './index';

import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

describe('basic template', () => {
  test('match snap shot', () => {
    const queryClient = new QueryClient();
    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <SavedJobsPage />
        </QueryClientProvider>
      </MemoryRouter>
    );
    expect(wrapper).toBeInTheDocument;
  });
});
