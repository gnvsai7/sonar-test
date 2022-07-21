/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import BasicTemplate from './index';
import SideNav from '../../organisms/SideNavBar';
import Header from '../../organisms/Header';
import MainContent from '../../organisms/MainContent';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';

describe('basic template', () => {
  test('match snap shot', () => {
    const queryClient = new QueryClient();
    render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          <BasicTemplate
            SideNavBar={<SideNav />}
            Header={<Header />}
            MainContent={<MainContent />}
          />
        </QueryClientProvider>
      </MemoryRouter>
    );
    const header = screen.getByTestId('header');
    expect(header).toBeTruthy();
    const sideNav = screen.getByTestId('sideNav');
    expect(sideNav).toBeTruthy();
    const mainContent = screen.getByTestId('mainContent');
    expect(mainContent).toBeVisible();
  });
});
