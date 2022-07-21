import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileUpload from './index';
export default {
  title: 'molecules/FileUpload',
  component: FileUpload,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = (args) => (
  <FileUpload {...args} />
);

export const Primary = Template.bind({});
