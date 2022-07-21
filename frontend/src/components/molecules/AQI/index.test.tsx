/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import AQI from './index';
import '@testing-library/jest-dom';

describe('Filter Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(<AQI qualityIndex={500} />);
    expect(wrapper).toBeTruthy;

    expect(wrapper.getByText(500)).toBeInTheDocument;
  });
});
