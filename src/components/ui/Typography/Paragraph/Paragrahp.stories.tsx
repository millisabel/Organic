import Paragraph from './Paragrahp';
import type { ParagraphProps } from './types';

export default {
  title: 'Typography/Paragraph',
  component: Paragraph,
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = (args: ParagraphProps) => <Paragraph {...args} />;

export const Interactive = Template.bind({});
// @ts-expect-error: Storybook adds args dynamically
Interactive.args = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};
