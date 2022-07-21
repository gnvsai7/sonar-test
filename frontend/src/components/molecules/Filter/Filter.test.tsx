/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Filter from './Filter';
import '@testing-library/jest-dom';

describe('Filter Component', () => {
  it('should match snapshot', () => {
    const test1 = jest.fn();
    const wrapper = render(
      <Filter name={'10-20km'} onChange={test1} checked={false} />
    );
    expect(wrapper).toBeTruthy;
    // fireEvent.change(screen.getByTestId('checkbox'));
    // expect(test1).toBeCalledTimes(1);

    expect(wrapper.getByTestId('checkbox-label')).toHaveTextContent('10-20km');
  });
});
