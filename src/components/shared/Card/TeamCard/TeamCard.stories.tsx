import { getStoryDescription } from '@/utils/storiesHelpers';
import TeamCard from '.';
import type { TeamMemberData } from './types';

export default {
  title: 'Components/Card/Shared/TeamCard',
  component: TeamCard,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Card/TeamCard/TeamCard.stories.tsx',
        }),
      },
    },
  },
  argTypes: {
    data: {
      control: 'object',
      description: 'Team member data including name, role, image, and socials',
    },
    variant: {
      control: 'select',
      options: ['default', 'small'],
      description: 'Card variant',
    },
  },
};

const sampleData: TeamMemberData = {
  id: 1,
  name: 'Giovani Bacardo',
  role: 'Farmer',
  image: 'Giovani_Bacardo.webp',
  socials: {
    facebook: 'https://www.facebook.com/giovani.bacardo',
    instagram: 'https://www.instagram.com/giovani.bacardo',
    twitter: 'https://www.twitter.com/giovani.bacardo',
  },
};

export const Template = (args: React.ComponentProps<typeof TeamCard>) => <TeamCard {...args} />;
Template.args = {
  data: sampleData,
  variant: 'default',
};
