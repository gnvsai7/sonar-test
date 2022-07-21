/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Myntra from '../../../assets/icons/myntra.png';
import JobDescriptionCard from './JobDescriptionCard';

describe('Job description card', () => {
  it('should match snapshot of initial render', () => {
    render(
      <JobDescriptionCard
        id={1}
        companyLogo={Myntra}
        companyName={'Myntra'}
        jobTitle={'User Experience Designer'}
        companyAddress={'HitechCity , Hyderabad 123456'}
        jobUploadedTime={new Date().toDateString()}
        jobDescription={
          'JobDescription will be added fom table for now this is what you should be happy with'
        }
        aboutTheCompany={
          'you can google it for now, we will add it later point of time'
        }
      />
    );
    const jobDescriptionCard = screen.getByTestId('jobDescriptionCard');

    expect(jobDescriptionCard).toBeVisible;

    const greenRoutesCard = screen.getByTestId('greenRoutes');
    expect(greenRoutesCard).toBeTruthy();
    const greenRoutesButton = screen.getByTestId('greenRoutesButton');
    expect(greenRoutesButton).toBeTruthy();
  });

  test('on click on greenRoutesButton the vehicle tab must be visible', () => {
    render(
      <JobDescriptionCard
        companyLogo={Myntra}
        companyName={'Myntra'}
        jobTitle={'User Experience Designer'}
        companyAddress={'HitechCity , Hyderabad 123456'}
        jobUploadedTime={new Date().toDateString()}
        jobDescription={
          'JobDescription will be added fom table for now this is what you should be happy with'
        }
        aboutTheCompany={
          'you can google it for now, we will add it later point of time'
        }
      />
    );

    const jobDescriptionCard = screen.getByTestId('jobDescriptionCard');

    expect(jobDescriptionCard).toBeVisible;
    const greenRoutesButton = screen.getByTestId('greenRoutesButton');
    expect(greenRoutesButton).toBeTruthy();
    fireEvent.click(greenRoutesButton);
    const vehicleTab = screen.getByTestId('vehicleTab');
    const bikeIcon = screen.getByTestId('bikeIcon');
    const busIcon = screen.getByTestId('busIcon');
    const carIcon = screen.getByTestId('carIcon');
    const trainIcon = screen.getByTestId('trainIcon');
    // const busTab = screen.getByTestId('busTab');
    expect(vehicleTab).toBeTruthy();
    expect(bikeIcon).toBeTruthy();
    expect(busIcon).toBeTruthy();
    expect(carIcon).toBeTruthy();
    expect(trainIcon).toBeTruthy();
    // expect(busTab).toBeVisible();
    fireEvent.click(carIcon);
    const carTab = screen.getByTestId('carTab');
    expect(carTab).toBeTruthy();
    fireEvent.click(bikeIcon);
    // expect(busTab).not.toBeVisible();
    fireEvent.click(trainIcon);
    // expect(busTab).not.toBeVisible();
  });
});
