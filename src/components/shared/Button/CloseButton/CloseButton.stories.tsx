import CloseButton from '@/components/shared/Button/CloseButton/CloseButton';
import type { CloseButtonProps } from './types';

export default {
  title: 'Components/Button/Shared/CloseButton',
  component: CloseButton,
  parameters: {
    docs: {
      description: {
        component: 'src/components/shared/Button/CloseButton/CloseButton.tsx',
      },
      toc: true,
    },
  },
  argTypes: {
    onClick: {
      action: false,
      table: {
        type: { summary: 'function' },
        category: 'Handlers',
      },
    },
    ariaLabel: {
      control: false,
      table: {
        type: { summary: 'string' },
        category: 'System',
        defaultValue: { summary: 'Close' },
      },
    },
    children: {
      control: false,
      table: {
        type: { summary: 'string' },
        detail: 'Icon Close',
        category: 'Content',
        defaultValue: { summary: 'Icon Close' },
      },
    },
    asChild: {
      control: false,
      table: {
        type: { summary: 'boolean' },
        category: 'System',
        defaultValue: { summary: 'false' },
      },
    },
    nameComponent: {
      control: false,
      table: {
        type: { summary: 'string' },
        category: 'System',
        defaultValue: { summary: 'CloseButton' },
      },
    },
    className: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Appearance',
      },
    },
  },
};

export const Default = (args: CloseButtonProps) => (
  <div className="relative p-4">
    <CloseButton {...args} />
  </div>
);
Default.args = {
  children: 'Close',
};
