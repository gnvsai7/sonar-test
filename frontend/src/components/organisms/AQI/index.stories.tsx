import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import AQI from './index';

export default {
  title: 'organisms/AQI',
  component: AQI,
} as ComponentMeta<typeof AQI>;

const Template: ComponentStory<typeof AQI> = (args) => <AQI {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  cityList: ['Hyderabad', 'Delhi'],
};
