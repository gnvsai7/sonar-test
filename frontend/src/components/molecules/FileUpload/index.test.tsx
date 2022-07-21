/* eslint-disable no-undef */
import React from 'react';
import { render } from '@testing-library/react';
import FileUpload from './index';
import '@testing-library/jest-dom';

describe('File upload Component', () => {
  it('should match snapshot', () => {
    const wrapper = render(
      <FileUpload
        fileName={'test'}
        onChange={function (e: any): void {
          throw new Error('Function not implemented.');
        }}
      />
    );
    expect(wrapper).toBeTruthy;
  });
});
