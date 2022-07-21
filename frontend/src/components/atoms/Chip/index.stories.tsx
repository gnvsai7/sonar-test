import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import MuiChip from './index';
export default {
  title: 'atoms/Chip',
  component: MuiChip,
  argTypes: {
    onClick: { action: 'clicked' },
    onDelete: { action: 'delete' },
  },
} as ComponentMeta<typeof MuiChip>;

const Template: ComponentStory<typeof MuiChip> = (args) => (
  <MuiChip {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  label: 'story',
  variant: 'filled',
  size: 'small',
  onDelete: () => {
    console.log('deleted');
  },
};
export const Secondary = Template.bind({});

Secondary.args = {
  label: 'story2',
  variant: 'outlined',
};
