import MenuButton from './MenuButton';
import type { MenuButtonProps } from './types';

export default {
  title: 'Components/Button/Shared/MenuButton',
  component: MenuButton,
  parameters: {
    docs: {
      description: {
        component: 'src/components/shared/Button/MenuButton/MenuButton.tsx',
      },
      toc: true,
    },
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
      table: {
        type: { summary: 'boolean' },
        category: 'System',
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      action: 'clicked',
      table: {
        type: { summary: 'function' },
        category: 'Handlers',
      },
    },
    className: {
      control: 'text',
      table: {
        type: { summary: 'string' },
        category: 'Appearance',
      },
    },
    children: {
      control: false,
      table: {
        type: { summary: 'string' },
        category: 'Content',
        detail: 'Icon Menu',
        defaultValue: { summary: 'Icon Menu' },
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
        defaultValue: { summary: 'MenuButton' },
      },
    },
  },
};

export const Default = (args: MenuButtonProps) => <MenuButton {...args} />;
Default.args = {
  isOpen: false,
  onClick: () => {},
};

export const MenuClose = () => <MenuButton isOpen={false} onClick={() => {}} />;

export const MenuOpen = () => <MenuButton isOpen={true} onClick={() => {}} />;
