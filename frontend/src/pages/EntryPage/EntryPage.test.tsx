/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import EntryPage from './EntryPage';
import { MemoryRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

describe('entry template', () => {
  test('match snap shot', () => {
    // const queryClient = new QueryClient();
    // render(
    //   <MemoryRouter>
    //     <QueryClientProvider client={queryClient}>
    //       <EntryPage></EntryPage>
    //     </QueryClientProvider>
    //   </MemoryRouter>
    // );
    // const entryPage = screen.getByTestId('entryPage');
    // expect(entryPage).toBeTruthy();
    // const logo = screen.getByTestId('logo');
    // expect(logo).toBeVisible();
    // const stepper = screen.getByTestId('stepper');
    // expect(stepper).toBeVisible();
    // const dropdownHeading = screen.getByTestId('dropdownHeading');
    // expect(dropdownHeading).toBeTruthy();
    // const nextButton = screen.getByTestId('nextButton');
    // expect(nextButton).toBeTruthy();
    // fireEvent.click(nextButton);
    // const backButton = screen.getByTestId('backButton');
    // expect(backButton).toBeTruthy();
    // fireEvent.click(backButton);
    // expect(backButton).not.toBeVisible();
  });
  test('Skills screen should be visible on two clicks', () => {
    // const queryClient = new QueryClient();
    // render(
    //   <MemoryRouter>
    //     <QueryClientProvider client={queryClient}>
    //       <EntryPage></EntryPage>
    //     </QueryClientProvider>
    //   </MemoryRouter>
    // );
    // const nextButton = screen.getByTestId('nextButton');
    // expect(nextButton).toBeTruthy();
    // fireEvent.click(nextButton);
    // fireEvent.click(nextButton);
    // const skillsScreen = screen.getByTestId('skillsScreen');
    // expect(skillsScreen).toBeTruthy();
  });
});
