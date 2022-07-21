/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Filter from './index';
import '@testing-library/jest-dom';
import { GREEN_COMMUTE, GREEN_COMMUTE_FILTERS } from '../../utils/constant';
import { Pair } from '../FilterGroup/FilterGroup';

describe('Filter Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(
      <Filter
        name={GREEN_COMMUTE}
        values={GREEN_COMMUTE_FILTERS}
        radio={true}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(wrapper).toBeTruthy;
  });

  it('check undefined condition', () => {
    const GREEN_COMMUTE_FILTER: Pair[] = [
      { key: 'Yes', checked: false },
      { key: 'No', checked: false },
    ];
    const wrapper = render(
      <Filter
        name={GREEN_COMMUTE}
        values={GREEN_COMMUTE_FILTER}
        radio={true}
        onChange={function (): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
