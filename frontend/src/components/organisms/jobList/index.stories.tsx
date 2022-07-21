import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobList from './index';

export default {
  title: 'organisms/JobList',
  component: JobList,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aAZmibHibDJ541oKCpxVso/Green-Commute?node-id=98%3A3631',
    },
  },
} as ComponentMeta<typeof JobList>;

const Template: ComponentStory<typeof JobList> = (args) => (
  <JobList {...args} />
);

export const Card = Template.bind({});

Card.args = {};
