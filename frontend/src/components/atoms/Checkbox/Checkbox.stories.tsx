import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Checkbox from './Checkbox';

export default {
  title: 'atoms/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  defaultChecked: true,
};

Secondary.args = {
  defaultChecked: false,
};
