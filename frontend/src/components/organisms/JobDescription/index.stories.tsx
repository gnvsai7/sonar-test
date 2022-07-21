import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import JobDescription from './index';

export default {
  title: 'organisms/JobDescription',
  component: JobDescription,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aAZmibHibDJ541oKCpxVso/Green-Commute?node-id=98%3A3631',
    },
  },
} as ComponentMeta<typeof JobDescription>;

const Template: ComponentStory<typeof JobDescription> = (args) => (
  <JobDescription {...args} />
);

export const Card = Template.bind({});
