import { getStoryDescription } from '@/utils/storiesHelpers';
import ReviewCard from './ReviewCard';

export default {
  title: 'Components/Card/Shared/ReviewCard',
  component: ReviewCard,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Card',
          source: 'src/components/shared/Card/ReviewCard/ReviewCard.tsx',
        }),
      },
    },
    controls: {
      exclude: ['data'],
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <div className="w-full bg-primary p-4">
        <Story />
      </div>
    ),
  ],
};

export const Default = (args: React.ComponentProps<typeof ReviewCard>) => <ReviewCard {...args} />;
Default.args = {
  data: {
    name: 'John Doe',
    job: 'Software Engineer',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    rating: 3,
    image: 'Emily_Davis.webp',
  },
};
