/* eslint-disable no-undef */
import React, { useContext } from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
  cleanup,
} from '@testing-library/react';
import Filter, { SearchContext } from './index';
import '@testing-library/jest-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent } from '@storybook/testing-library';
import { debug } from 'console';

beforeAll(() => {
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
afterEach(() => cleanup());
const server = setupServer(
  rest.get(
    'https://quiet-sands-60458.herokuapp.com/filters',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            name: 'Test Filters',
            values: [
              {
                key: 'first',
                checked: false,
              },
              {
                key: 'second',
                checked: false,
              },
            ],
          },
        ])
      );
    }
  )
);
describe('Filter Component', () => {
  //   it('should match snapshot', () => {
  //     const queryClient = new QueryClient();
  //     const wrapper = render(
  //       <MemoryRouter>
  //         <QueryClientProvider client={queryClient}>
  //           <Filter
  //             searchProps={{
  //               placeholder1: 'search 1',

  //               placeholder2: 'search 2',
  //             }}
  //           />
  //         </QueryClientProvider>
  //       </MemoryRouter>
  //     );
  //     expect(wrapper).toBeTruthy;
  //   });

  //   it('should show find jobs text if route is find jobs', async () => {
  //     const queryClient = new QueryClient();
  //     // eslint-disable-next-line max-nested-callbacks
  //     jest.mock('react-router-dom', () => {
  //       return {
  //         // eslint-disable-next-line max-nested-callbacks
  //         useLocation: () => {
  //           return {
  //             pathname: '/findjobs',
  //           };
  //         },
  //       };
  //     });
  //     const wrapper = render(
  //       <MemoryRouter initialEntries={['/findjobs']}>
  //         <QueryClientProvider client={queryClient}>
  //           <Filter
  //             searchProps={{
  //               placeholder1: 'search 1',

  //               placeholder2: 'search 2',
  //             }}
  //           />
  //         </QueryClientProvider>
  //       </MemoryRouter>
  //     );

  //     expect(wrapper.queryByTestId('find-jobs')).toHaveTextContent('Find Jobs');
  //   });

  //   it('find job text should not be in document if route is not /findjobs', () => {
  //     const queryClient = new QueryClient();
  //     // eslint-disable-next-line max-nested-callbacks
  //     jest.mock('react-router-dom', () => {
  //       return {
  //         // eslint-disable-next-line max-nested-callbacks
  //         useLocation: () => {
  //           return {
  //             pathname: '/',
  //           };
  //         },
  //       };
  //     });
  //     const wrapper = render(
  //       <MemoryRouter initialEntries={['/']}>
  //         <QueryClientProvider client={queryClient}>
  //           <Filter
  //             searchProps={{
  //               placeholder1: 'search 1',

  //               placeholder2: 'search 2',
  //             }}
  //           />
  //         </QueryClientProvider>
  //       </MemoryRouter>
  //     );

  //     expect(wrapper.queryByTestId('find-jobs')).ToBeNull;
  //   });
  //   it('should show filters when button is clicked', async () => {
  //     const queryClient = new QueryClient();
  //     const wrapper = render(
  //       <MemoryRouter>
  //         <QueryClientProvider client={queryClient}>
  //           <Filter
  //             searchProps={{
  //               placeholder1: 'search 1',

  //               placeholder2: 'search 2',
  //             }}
  //           />
  //         </QueryClientProvider>
  //       </MemoryRouter>
  //     );
  //     fireEvent.click(screen.getByTestId('filter-button'));
  //     await waitForElementToBeRemoved(wrapper.getByTestId('loading'));

  //     expect(screen.queryByLabelText('Test Filters')).toBeInTheDocument;
  //     expect(screen.queryByLabelText('first')).toBeInTheDocument;
  //     expect(screen.queryByLabelText('second')).toBeInTheDocument;
  //   });

  //   it('filter should not be shown if modal is closed', async () => {
  //     const queryClient = new QueryClient();
  //     const wrapper = render(
  //       <MemoryRouter>
  //         <QueryClientProvider client={queryClient}>
  //           <Filter
  //             searchProps={{
  //               placeholder1: 'search 1',

  //               placeholder2: 'search 2',
  //             }}
  //           />
  //         </QueryClientProvider>
  //       </MemoryRouter>
  //     );
  //     fireEvent.click(screen.getByTestId('filter-button'));
  //     const closeButton = wrapper.findByTestId('close-modal');
  //     expect(closeButton).toBeInTheDocument;
  //     fireEvent.click(await closeButton);

  //     expect(screen.queryByLabelText('Test Filters')).toBeNull;
  //     expect(screen.queryByLabelText('first')).toBeNull;
  //     expect(screen.queryByLabelText('second')).toBeNull;
  //   });
  //   it('if search is true then job list and based on your search text should displayed', () => {
  //     const queryClient = new QueryClient();
  //     const wrapper = render(
  //       <MemoryRouter>
  //         <QueryClientProvider client={queryClient}>
  //           <Filter
  //             searchProps={{
  //               placeholder1: 'search 1',

  //               placeholder2: 'search 2',
  //             }}
  //           />
  //         </QueryClientProvider>
  //       </MemoryRouter>
  //     );
  //     const element = screen.getByTestId('autocomplete');
  //     fireEvent.focus(element);
  //     expect(wrapper.queryByLabelText('Job List')).toBeInTheDocument;
  //     expect(wrapper.queryByLabelText('Based on your search')).toBeInTheDocument;
  //   });
  it('if search is false then text recommendation test is shown and profile skills ', () => {
    const queryClient = new QueryClient();
    // eslint-disable-next-line max-nested-callbacks
    jest.mock('../../utils/context', () => {
      return {
        // eslint-disable-next-line max-nested-callbacks
        SearchContext: () => {
          return {
            search: true,
            setSearch: jest.fn(),
          };
        },
      };
    });

    const wrapper = render(
      <MemoryRouter>
        <QueryClientProvider client={queryClient}>
          {/* <SearchContext.Provider
            value={{ search: true, setSearch: jest.fn() }}
          > */}
          <Filter
            searchProps={{
              placeholder1: 'search 1',

              placeholder2: 'search 2',
            }}
          />
          {/* </SearchContext.Provider> */}
        </QueryClientProvider>
      </MemoryRouter>
    );

    expect(screen.getByText('Recommented for you')).toBeInTheDocument;
    expect(screen.getByText('Based on your profile skills and search skills'))
      .toBeInTheDocument;
  });

  // it('after click on apply chips should be shown', async () => {
  //   const queryClient = new QueryClient();
  //   const wrapper = render(
  //     <MemoryRouter>
  //       <QueryClientProvider client={queryClient}>
  //         <Filter
  //           searchProps={{
  //             placeholder1: 'search 1',

  //             placeholder2: 'search 2',
  //           }}
  //         />
  //       </QueryClientProvider>
  //     </MemoryRouter>
  //   );
  //   fireEvent.click(screen.getByTestId('filter-button'));
  //   await waitForElementToBeRemoved(wrapper.getByTestId('loading'));

  // const checkboxes = wrapper.getAllByTestId('checkbox');
  // expect(checkboxes[0]).toHaveC;
  // expect(checkboxes).toHaveLength(2);
  // });
});
