import { ComponentStory, ComponentMeta } from '@storybook/react';
import AQIScore from './index';
export default {
  title: 'Molecules/AQIScore',
  component: AQIScore,
} as ComponentMeta<typeof AQIScore>;
const Template: ComponentStory<typeof AQIScore> = (args) => (
  <AQIScore {...args} />
);

export const AQIScoreCard = Template.bind({});

const qI = 894;

AQIScoreCard.args = {
  qualityIndex: qI,
};
