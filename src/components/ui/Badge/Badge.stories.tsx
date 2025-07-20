import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import Badge from './Badge';
import type { BadgeProps } from './types';
import { badgeVariantOptions } from './variants';

const customProps = createArgTypesFromArray([
  {
    name: 'variant',
    options: badgeVariantOptions,
    control: 'select',
    type: 'string',
    defaultValue: 'default',
  },
]);

export default {
  title: 'Components/Badge/UI',
  component: Badge,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Badge/Badge.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
};

export const Template = (args: BadgeProps) => <Badge {...args} />;
Template.args = {
  children: 'Badge',
};

export const Default = () => <Badge>Badge</Badge>;
export const VariantMeta = () => <Badge variant="meta">Badge</Badge>;
export const VariantData = () => <Badge variant="data">Badge</Badge>;
