import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import AutoCompleteDropDown from './index';
import { SEARCH_SKILLS } from '../../utils/constant';
import { JobTitleArray } from '../../utils/storybookConstant';
export default {
  title: 'molecules/AutoComplete',
  component: AutoCompleteDropDown,
  argTypes: {
    onClick: { action: 'clicked' },
    onDelete: { action: 'delete' },
  },
} as ComponentMeta<typeof AutoCompleteDropDown>;

const Template: ComponentStory<typeof AutoCompleteDropDown> = (args) => (
  <AutoCompleteDropDown {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  options: JobTitleArray,
  label: SEARCH_SKILLS,
};
