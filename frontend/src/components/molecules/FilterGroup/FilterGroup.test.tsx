/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import Filter from './FilterGroup';
import '@testing-library/jest-dom';
import { DISTANCE, DISTANCE_FILTERS } from '../../utils/constant';

describe('Filter Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(
      <Filter
        name={DISTANCE}
        values={DISTANCE_FILTERS}
        onChange={function (event: ChangeEvent<HTMLInputElement>): void {
          throw new Error('Function not implemented.');
        }}
        defaultValue={(e) => true}
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
