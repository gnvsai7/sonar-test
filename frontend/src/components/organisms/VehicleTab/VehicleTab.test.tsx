// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import VehicleTab from './VehicleTab';

describe('Vehicle Tab component', () => {
  test('Match the snapshot', () => {
    render(<VehicleTab />);
    // const vehicleTab = screen.getByTestId('vehicleTab');
    // const bikeIcon = screen.getByTestId('bikeIcon');
    // const busIcon = screen.getByTestId('busIcon');
    // const carIcon = screen.getByTestId('carIcon');
    // const trainIcon = screen.getByTestId('trainIcon');
    // const busTab = screen.getByTestId('busTab');
    // expect(vehicleTab).toBeTruthy();
    // expect(bikeIcon).toBeTruthy();
    // expect(busIcon).toBeTruthy();
    // expect(carIcon).toBeTruthy();
    // expect(trainIcon).toBeTruthy();
    // expect(busTab).toBeVisible();
    // fireEvent.click(carIcon);
    // const carTab = screen.getByTestId('carTab');
    // expect(carTab).toBeTruthy();
    // fireEvent.click(bikeIcon);
    // expect(busTab).not.toBeVisible();
    // fireEvent.click(trainIcon);
    // expect(busTab).not.toBeVisible();
  });
});
