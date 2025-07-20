import Quote from './Quote';
import type { QuoteProps } from './types';

export default {
  title: 'Typography/Quote',
  component: Quote,
  argTypes: {
    text: { control: 'text' },
  },
};

const Template = (args: QuoteProps) => <Quote {...args} />;

export const Interactive = Template.bind({});
// @ts-expect-error: Storybook adds args dynamically
Interactive.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const QuoteDefault = () => {
  return (
    <div>
      <Quote>Default Quote</Quote>
    </div>
  );
};
