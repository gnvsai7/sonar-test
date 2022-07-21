import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Search from './index';
import { LOCATION, SEARCH_SKILLS } from '../../utils/constant';
import { JobTitleArray, LOCATIONS } from '../../utils/storybookConstant';
export default {
  title: 'Molecules/Search',
  component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const SearchComponent = Template.bind({});

SearchComponent.args = {
  placeholder1: SEARCH_SKILLS,
  options1: JobTitleArray,
  placeholder2: LOCATION,
  options2: LOCATIONS,
};
