import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Filter from './index';

import { ArrayOFilters, LOCATION, SEARCH_SKILLS } from '../../utils/constant';
import { JobTitleArray, LOCATIONS } from '../../utils/storybookConstant';

export default {
  title: 'organisms/Filter',
  component: Filter,
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

// eslint-disable-next-line prefer-const

export const Primary = Template.bind({});

Primary.args = {
  filterList: ArrayOFilters,
  searchProps: {
    placeholder1: SEARCH_SKILLS,
    options1: JobTitleArray,
    placeholder2: LOCATION,
    options2: LOCATIONS,
  },
};
