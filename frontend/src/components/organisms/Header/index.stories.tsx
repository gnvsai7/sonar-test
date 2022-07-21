import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './index';

export default {
  title: 'organisms/Header',
  component: Header,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/aAZmibHibDJ541oKCpxVso/Green-Commute?node-id=98%3A3631',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Card = Template.bind({});
