/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import GreenRoutes from './GreenRoutes';
import { render, screen } from '@testing-library/react';

describe('Green Routes Molecule', () => {
  it('snapshot match', () => {
    const mock = jest.fn();
    render(
      <GreenRoutes
        onClickHandler={mock}
        aboutTheCompany="this is a very good company you should definetly join"
        jobDescription="this is a very good job you should definelty work"
      />
    );
    const greenRoutesCard = screen.getByTestId('greenRoutes');
    expect(greenRoutesCard).toBeTruthy();
  });
});
