import { getStoryDescription } from '@/utils/storiesHelpers';
import FloatingCartButton from './FloatingCartButton';
import type { FloatingCartButtonProps } from './types';

export default {
  title: 'Components/Button/Extended/FloatingCartButton',
  component: FloatingCartButton,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/features/cart/components/buttons/FloatingCartButton/FloatingCartButton.tsx',
        }),
      },
    },
  },
};

export const Template = (args: FloatingCartButtonProps) => (
  <div className="p-8">
    <FloatingCartButton {...args} />
  </div>
);

Template.args = {
  count: 3,
  price: 77.97,
  isVisible: true,
};

export const Visible = () => (
  <div className="p-8">
    <FloatingCartButton count={5} price={125.5} isVisible={true} />
  </div>
);

export const Hidden = () => (
  <div className="p-8">
    <FloatingCartButton count={0} price={0} isVisible={false} />
  </div>
);

export const EmptyCart = () => (
  <div className="p-8">
    <FloatingCartButton count={0} price={0} isVisible={true} />
  </div>
);
