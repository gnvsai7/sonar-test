import React from 'react';
// import { expect } from '@storybook/jest';
// import { within, userEvent } from '@storybook/testing-library';
// import Myntra from '../../../assets/icons/myntra.png';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobCard from './index';
import { JobDetail } from '../../utils/storybookConstant';
export default {
  title: 'molecules/JobCard',
  component: JobCard,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aAZmibHibDJ541oKCpxVso/Green-Commute?node-id=98%3A3631',
    },
  },
} as ComponentMeta<typeof JobCard>;

const Template: ComponentStory<typeof JobCard> = (args) => (
  <JobCard {...args} />
);

export const Card = Template.bind({});

Card.args = {
  ...JobDetail,
};
