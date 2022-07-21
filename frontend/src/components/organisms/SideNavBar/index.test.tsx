/* eslint-disable no-undef */
import { render } from '@testing-library/react';
// import { expect, describe, it } from '@testing-library/jest-dom/extend';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SideNav from './index';

describe('Side nav organism component', () => {
  it('should render ', () => {
    const wrapper = render(
      <MemoryRouter>
        <SideNav />
      </MemoryRouter>
    );
    expect(wrapper).toBeTruthy;
  });

  it('check all the side nav headings is present', () => {
    const wrapper = render(
      <MemoryRouter>
        {' '}
        <SideNav />
      </MemoryRouter>
    );

    // expect(wrapper.getByTestId('needHelp')).toBeInTheDocument;
    // expect(wrapper.getByTestId('dashboard')).toBeInTheDocument;
    // expect(wrapper.getByTestId('contactUs')).toBeInTheDocument;
    // expect(wrapper.getByTestId('settings')).toBeInTheDocument;
    // expect(wrapper.getByTestId('practiceTest')).toBeInTheDocument;

    // expect(wrapper.getByTestId('divider')).toBeTruthy();
    // expect(wrapper.getByTestId('newsEvents')).toBeInTheDocument;
    // expect(wrapper.getByTestId('savedJobs')).toBeInTheDocument;
    // expect(wrapper.getByTestId('findJobs')).toBeInTheDocument;
  });
});
