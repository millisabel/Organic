import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import Card from '.';
import { cardVariantsOptions } from './variants';

const customProps = createArgTypesFromArray([
  {
    name: 'variant',
    type: 'string',
    control: 'select',
    options: cardVariantsOptions,
    defaultValue: 'default',
  },
  {
    name: 'className',
    type: 'string',
    control: 'text',
  },
  {
    name: 'nameComponent',
    type: 'string',
    defaultValue: 'Card',
    control: false,
  },
  {
    name: 'children',
    type: 'node',
    control: false,
  },
]);

export default {
  title: 'Components/Card/UI',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Card/Card.stories.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
};

export const Template = (arg: React.ComponentProps<typeof Card>) => <Card {...arg} />;
Template.args = {
  children: <div>Card</div>,
};
