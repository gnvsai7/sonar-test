import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Filter from './Filter';

export default {
  title: 'molecules/Checkbox',
  component: Filter,
  argTypes: {
    onChange: { action: 'clicked' },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Filter>;

const Template: ComponentStory<typeof Filter> = (args) => <Filter {...args} />;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});

Primary.args = {
  name: '10-20km',

  onChange: (e) => {
    console.log(e);
  },
};

Secondary.args = {
  name: '20-50km',
  //  checked: true,
  onChange: (e) => {
    return !e.target.checked;
  },
};
