/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import '@testing-library/jest-dom';
import Checkbox from './Checkbox';

describe('Checkbox Component', () => {
  it('should match snapshot', () => {
    const test1 = jest.fn();
    render(<Checkbox onChange={test1} />);
    const wrapper = screen.getByTestId('checkbox');
    expect(wrapper).toBeTruthy;
  });
});
