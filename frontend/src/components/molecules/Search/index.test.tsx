/* eslint-disable no-undef */
import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Search from './index';

import { LOCATION, SEARCH_SKILLS } from '../../utils/constant';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

beforeAll(() => {
  server.listen();
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
afterEach(() => cleanup());
const server = setupServer(
  rest.get(
    'https://quiet-sands-60458.herokuapp.com/locations',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            name: 'Hyderabad , Telangana,India',
          },
        ])
      );
    }
  ),
  rest.get(
    'https://quiet-sands-60458.herokuapp.com/skills',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            id: 1,
            name: 'User Experience Designer',
          },
          {
            id: 2,
            name: 'Product Designer',
          },
        ])
      );
    }
  )
);

describe('Search  Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(
      <Search placeholder1={SEARCH_SKILLS} placeholder2={LOCATION} />
    );

    expect(wrapper).toBeTruthy;
  });
});
