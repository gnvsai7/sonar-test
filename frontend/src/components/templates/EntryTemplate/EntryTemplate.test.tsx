/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import EntryTemplate from './EntryTemplate';
import { MemoryRouter } from 'react-router-dom';

describe('entry template', () => {
  test('match snap shot', () => {
    // render(
    //   <MemoryRouter>
    //     <EntryTemplate></EntryTemplate>
    //   </MemoryRouter>
    // );
    // const entryTemp = screen.getByTestId('entryTemplate');
    // expect(entryTemp).toBeTruthy();
    // const entryImage = screen.getByTestId('entryImage');
    // expect(entryImage).toBeTruthy();
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
});
