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
    defaultValue: {
      control: 'text',
      description:
        'Value of the default option (shows selected state when different from current value)',
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
  defaultValue: 'option1',
};

export const WithDefaultValue = {
  args: {
    options: sampleOptions,
    value: 'option2',
    placeholder: 'Select an option',
    defaultValue: 'option1',
  },
};

export const WithoutDefaultValue = {
  args: {
    options: sampleOptions,
    value: 'option2',
    placeholder: 'Select an option',
  },
};
