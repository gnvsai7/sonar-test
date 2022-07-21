import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterGroup from './FilterGroup';
import { DISTANCE, DISTANCE_FILTERS } from '../../utils/constant';

export default {
  title: 'molecules/FilterGroup',
  component: FilterGroup,
  argTypes: {
    onChange: { action: 'clicked' },
  },
} as ComponentMeta<typeof FilterGroup>;

const Template: ComponentStory<typeof FilterGroup> = (args) => (
  <FilterGroup {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  name: DISTANCE,
  values: DISTANCE_FILTERS,
  radio: false,
  onChange: () => {
    console.log('onChange');
  },
};
