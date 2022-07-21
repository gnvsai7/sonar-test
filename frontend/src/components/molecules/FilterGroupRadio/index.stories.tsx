import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FilterGroupRadio from './index';
import { GREEN_COMMUTE, GREEN_COMMUTE_FILTERS } from '../../utils/constant';

export default {
  title: 'molecules/RadioFilter',
  component: FilterGroupRadio,
  argTypes: {
    onChange: { action: 'clicked' },
  },
} as ComponentMeta<typeof FilterGroupRadio>;

const Template: ComponentStory<typeof FilterGroupRadio> = (args) => (
  <FilterGroupRadio {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: GREEN_COMMUTE,
  values: GREEN_COMMUTE_FILTERS,
  radio: true,
  onChange: (e) => {
    console.log('onChange');
  },
};
