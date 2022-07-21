import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import GreenRoutes from './GreenRoutes';

export default {
  title: 'molecules/GreenRoutes',
  component: GreenRoutes,
} as ComponentMeta<typeof GreenRoutes>;

const Template: ComponentStory<typeof GreenRoutes> = (args) => (
  <GreenRoutes {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  aboutTheCompany: 'this is a very good company you should definetly join',
  jobDescription: 'this is a very good job you should definelty work',
};
