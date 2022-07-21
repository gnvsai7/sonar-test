import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import JobDescriptionCard from './JobDescriptionCard';
import Myntra from '../../../assets/icons/myntra.png';

export default {
  title: 'organisms/JobDescriptionCard',
  component: JobDescriptionCard,
} as ComponentMeta<typeof JobDescriptionCard>;

const Template: ComponentStory<typeof JobDescriptionCard> = (args) => (
  <JobDescriptionCard {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  companyLogo: Myntra,
  companyName: 'Myntra',
  jobTitle: 'User Experience Designer',
  companyAddress: 'HitechCity , Hyderabad 123456',
  jobUploadedTime: new Date().toDateString(),
  jobDescription:
    'JobDescription will be added fom table for now this is what you should be happy with',
  aboutTheCompany:
    'you can google it for now, we will add it later point of time',
};
