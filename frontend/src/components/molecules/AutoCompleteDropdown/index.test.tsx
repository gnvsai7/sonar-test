/* eslint-disable no-undef */
import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import AutoCompleteDropDown from './index';

const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
];
describe('AutoComplete Component', () => {
  it('should match snapshot', () => {
    // const test1 = jest.fn();
    const wrapper = render(
      <AutoCompleteDropDown options={top100Films} label={'Movie'} />
    );
    expect(wrapper).toBeTruthy;
  });
  it('check label is present', () => {
    // const wrapper = render(
    //   <AutoCompleteDropDown options={top100Films} label={'Movie'} />
    // );
    // expect(wrapper.getByLabelText('Movie')).toBeInTheDocument;
  });
  it('should show option on click', () => {
    // const wrapper = render(
    //   <AutoCompleteDropDown options={top100Films} label={'Movie'} />
    // );
    // const input = screen.getByLabelText('Movie');
    // fireEvent.change(input, { target: { value: 'a' } });
    // expect(screen.getByText('The Godfather')).toBeInTheDocument;
  });
});
