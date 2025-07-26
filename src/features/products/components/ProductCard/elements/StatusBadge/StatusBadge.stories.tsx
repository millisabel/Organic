import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import StatusBadge, { type StatusBadgeProps } from '.';
import { badgeStateOptions } from './variants';

const customProps = createArgTypesFromArray([
  {
    name: 'state',
    control: 'select',
    options: badgeStateOptions,
    type: 'VariantProps<typeof statusBadgeVariants>["state"]',
    defaultValue: 'default',
  },
  {
    name: 'text',
    control: 'text',
    type: 'string',
    defaultValue: 'Template',
  },
]);

export default {
  title: 'Components/Badge/Extended/StatusBadge',
  component: StatusBadge,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Badge',
          source: 'src/components/ui/Card/ProductCard/blocks/StatusBadge/StatusBadge.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
};

export const Template = (args: StatusBadgeProps) => <StatusBadge {...args} />;
Template.args = {
  state: 'default',
  text: 'Template',
};

export const Default = () => <StatusBadge />;
export const StateNew = () => <StatusBadge text="New" state="new" />;
export const StateSale = () => <StatusBadge text="Sale" state="sale" />;
export const StateInCart = () => <StatusBadge text="In Cart" state="inCart" />;
export const StateOutOfStock = () => <StatusBadge text="Out of Stock" state="outOfStock" />;
