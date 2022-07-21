/* eslint-disable no-undef */
import { render } from '@testing-library/react';
// import { expect, describe, it } from '@testing-library/jest-dom/extend';
import React from 'react';

import Header from './index';

describe('header  component', () => {
  it('should render ', () => {
    const wrapper = render(<Header />);
    expect(wrapper).toBeTruthy;
  });
});
