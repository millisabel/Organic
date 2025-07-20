import { MemoryRouter } from 'react-router-dom';
import GoToCartButton from './GoToCartButton';
import { getStoryDescription } from '@/utils/storiesHelpers';
import type { GoToCartButtonProps } from './types';

export default {
  title: 'Components/Button/Extended/GoToCartButton',
  component: GoToCartButton,
  decorators: [
    (Story: React.ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/features/cart/components/buttons/GoToCartButton/GoToCartButton.tsx',
        }),
      },
    },
  },
};

export const Template = (args: GoToCartButtonProps) => <GoToCartButton {...args} />;

Template.args = {
  mode: 'shopCompact',
};
