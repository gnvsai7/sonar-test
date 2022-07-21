/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import JobCard from './index';
import Myntra from '../../../assets/icons/myntra.png';
describe('Job Card Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(
      <JobCard
        id={1}
        companyIcon={Myntra}
        companyName="Myntra"
        title="User Experience Designer"
        location="HitechCity , Hyderabad 123456"
        time="36 min ago"
      />
    );

    expect(wrapper).toBeTruthy;
  });
});
