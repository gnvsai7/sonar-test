/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Success from './index';
import '@testing-library/jest-dom';

describe('File upload success Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(<Success name={'abc'} />);
    expect(wrapper).toBeTruthy;
  });
});
