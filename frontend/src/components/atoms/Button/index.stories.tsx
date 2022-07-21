import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Button from './index';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
Primary.args = {
  color: 'primary',
  variant: 'outlined',
  children: 'Hello',
};
Secondary.args = {
  color: 'primary',
  variant: 'contained',
  children: 'Hello',
};
