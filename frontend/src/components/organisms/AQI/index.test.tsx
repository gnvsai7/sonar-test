/* eslint-disable no-undef */
import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AQI from './index';
import { QueryClient, QueryClientProvider } from 'react-query';
const server = setupServer(
  rest.get('https://quiet-sands-60458.herokuapp.com/aqi', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          id: 1,
          name: 'Delhi',
          value: 5,
        },
        {
          id: 2,
          name: 'Mumbai',
          value: 544,
        },
        {
          id: 3,
          name: 'Mumbai',
          value: 544,
        },
        {
          id: 4,
          name: 'Mumbai',
          value: 544,
        },
        {
          id: 5,
          name: 'Mumbai',
          value: 544,
        },
        {
          id: 6,
          name: 'Mumbai',
          value: 544,
        },
      ])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('AQI  Component', () => {
  it('should match snapshot', async () => {
    const queryClient = new QueryClient();
    const wrapper = render(
      <QueryClientProvider client={queryClient}>
        <AQI cityList={['Delhi', 'Mumbai', 'a', 'b', 'c', 'd']} step={1} />
      </QueryClientProvider>
    );

    expect(wrapper).toBeTruthy;
    // eslint-disable-next-line max-nested-callbacks
    await waitForElementToBeRemoved(screen.getByText('Loading...'));
    expect(screen.queryAllByTestId('aqi')).toHaveLength(6);
  });
  // it('check aqi value is rendered or not', () => {});
});
