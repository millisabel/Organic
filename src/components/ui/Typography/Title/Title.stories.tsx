import { getStoryDescription } from '@/utils/storiesHelpers';
import Title from './Title';
import type { TitleProps } from './types';

export default {
  title: 'Typography/Header',
  component: Title,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Typography/Title/Title.stories.tsx',
        }),
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'heroTitle', 'sectionTitle', 'sectionSubTitle'],
      defaultValue: 'default',
    },
  },
};

export const Template = (args: TitleProps) => <Title {...args} />;
Template.args = {
  children: 'Default Header',
  variant: 'default',
};

export const HeaderDefault = () => {
  return (
    <div>
      <Title>Default Title</Title>
    </div>
  );
};

export const HeroTitle = () => {
  return (
    <div>
      <Title variant="heroTitle">Hero Title</Title>
    </div>
  );
};

export const SectionTitle = () => {
  return (
    <div>
      <Title variant="sectionTitle">Section Title</Title>
    </div>
  );
};

export const SectionSubTitle = () => {
  return (
    <div>
      <Title variant="sectionSubTitle">Section Sub Title</Title>
    </div>
  );
};

export const CardTitle = () => {
  return (
    <div>
      <Title variant="cardTitle">Card Title</Title>
    </div>
  );
};
