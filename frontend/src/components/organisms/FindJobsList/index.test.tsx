/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import JobList from './index';
import '@testing-library/jest-dom/extend-expect';
// import { QueryClient, QueryClientProvider } from 'react-query';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query';
//jest.mock('react-query');
describe('Job Card Component', () => {
  // it('should match snapshot', () => {
  //   useQuery.mockReturnValue({
  //     isLoading: true,
  //     error: null,
  //     data: null,
  //   });

  //   const wrapper = render(<JobList search={true} />);

  //   expect(wrapper).toBeTruthy;
  //   expect(wrapper.getByTestId('loading')).toHaveTextContent('Loading...');
  // });
  // it('should show data if call if laoding is false and error is null', () => {
  //   useQuery.mockReturnValue({
  //     isLoading: false,
  //     error: null,
  //     data: [
  //       {
  //         id: 1,

  //         time: '37 min ago',
  //         title: 'User Experience Designer',

  //         companyName: 'Myntra',

  //         companyIcon:
  //           'data:image/jpeg;base64,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',

  //         location: 'Hyderabad , Telangana,India',
  //       },
  //     ],
  //   });

  //   const wrapper = render(<JobList search={true} />);

  //   expect(wrapper.getByText('37 min ago')).toBeInTheDocument;
  //   expect(wrapper.getByText('User Experience Designer')).toBeInTheDocument;
  //   expect(wrapper.getByText('Hyderabad , Telangana,India')).toBeInTheDocument;
  // });
  it('should render the data', () => {
    const queryClient = new QueryClient();
    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <JobList search={false} />
      </QueryClientProvider>
    );

    // console.log(wrapper);
    // expect(wrapper.getAllByTestId('title')).toHaveLength(5);
  });
});
