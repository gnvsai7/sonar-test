/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import JobDescription from './index';
// import Myntra from '../../../assets/icons/myntra.png';
// import { CardProps } from '../../molecules/JobCard';
import { QueryClient, QueryClientProvider } from 'react-query';
// const testList: CardProps[] = [];
// const job1 = {
//   id: 1,
//   companyIcon: Myntra,
//   companyName: 'Myntra',
//   jobTitle: 'User Experience Designer',
//   location: 'HitechCity , Hyderabad 123456',
//   time: '12:11',
// };
// testList.push(job1);
// testList.push(job1);
// testList.push(job1);
// testList.push(job1);
// testList.push(job1);
// testList.push(job1);
describe('Job Card Component', () => {
  it('should match snapshot', () => {
    const queryClient = new QueryClient();
    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <JobDescription />
      </QueryClientProvider>
    );
    expect(wrapper).toBeTruthy;
  });
});
