/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import MainContent from './index';

import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

describe('Main Template Component', () => {
  it('should match snapshot', () => {
    const queryClient = new QueryClient();
    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <MainContent />
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(wrapper).toBeTruthy;
  });
});
