import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import EntryStepper from './EntryStepper';

export default {
  title: 'Organisms/EntryStepper',
  component: EntryStepper,
} as ComponentMeta<typeof EntryStepper>;

const Template: ComponentStory<typeof EntryStepper> = (args) => (
  <EntryStepper {...args} />
);

export const Primary = Template.bind({});

Primary.args = {};
