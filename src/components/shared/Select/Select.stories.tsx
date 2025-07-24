import Select from './Select';
import type { SelectOption } from './types';

export default {
  title: 'Shared/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
};

const sampleOptions: SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

export const Template = (arg: React.ComponentProps<typeof Select>) => <Select {...arg} />;
Template.args = {
  options: sampleOptions,
  placeholder: 'Select an option',
};
