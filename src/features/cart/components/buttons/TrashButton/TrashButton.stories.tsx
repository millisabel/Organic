import { getStoryDescription } from '@/utils/storiesHelpers';
import TrashButton from './TrashButton';
import type { TrashButtonProps } from './insex';

export default {
  title: 'Components/Button/Extended/TrashButton',
  component: TrashButton,
  parameters: {
    controls: {
      exclude: ['handleRemove'],
    },
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/features/cart/components/buttons/TrashButton/TrashButton.tsx',
        }),
      },
    },
  },
};

export const Template = (args: TrashButtonProps) => <TrashButton {...args} />;
