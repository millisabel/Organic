import DataBadge from '@/components/shared/Badge/DataBadge/DataBadge';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import UserIcon from '@/components/shared/Icon/UserIcon';
import AuthorDisplay from '@/components/shared/Post/AuthorDisplay';
import Button from '@/components/ui/Button/Button';
import { getStoryDescription } from '@/utils/storiesHelpers';
import { Link, MemoryRouter } from 'react-router-dom';
import NewsCard from './NewsCard';

export default {
  title: 'Components/Card/Shared/NewsCard',
  component: NewsCard,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Card',
          source: 'src/components/shared/Card/NewsCard/NewsCard.tsx',
        }),
      },
    },
    controls: {
      exclude: ['data', 'slots'],
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <MemoryRouter>
        <div className="w-full bg-background p-4">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Default = (args: React.ComponentProps<typeof NewsCard>) => <NewsCard {...args} />;

Default.args = {
  data: {
    id: 1,
    title: 'The Benefits of Vitamin D & How to Get It',
    imageUrl: 'news_1.webp',
    author: 'John Doe',
    date: '2021-01-01',
    description: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum',
  },
};

export const WithCustomButtonUndIconColor = (args: React.ComponentProps<typeof NewsCard>) => (
  <NewsCard
    {...args}
    slots={{
      button: (
        <Button variant="transparentFull" asChild className="group">
          <Link to={`/blog/${args.data.id}`} className="px-0">
            <span>Read More</span>
            <ArrowIcon
              variant="arrow"
              size="md"
              className="group-hover:bg-secondary group-hover:scale-110 transition-all duration-300"
            />
          </Link>
        </Button>
      ),
      author: (
        <AuthorDisplay
          author={args.data.author}
          label="By "
          icon={<UserIcon variant="default" size="xs" className="text-secondary" />}
          className="mb-4"
        />
      ),
    }}
  />
);

WithCustomButtonUndIconColor.args = {
  data: {
    id: 2,
    title: 'Organic Farming: Sustainable Future',
    imageUrl: 'news_2.webp',
    author: 'Jane Smith',
    date: '2021-01-15',
    description: 'Learn about the benefits of organic farming and its impact on our environment.',
  },
};

export const WithCustomBadge = (args: React.ComponentProps<typeof NewsCard>) => (
  <NewsCard
    {...args}
    slots={{
      badge: (
        <DataBadge date={args.data.date} className="absolute top-4 left-4 bg-red-500 text-white" />
      ),
    }}
  />
);

WithCustomBadge.args = {
  data: {
    id: 3,
    title: 'Healthy Eating Habits',
    imageUrl: 'news_3.webp',
    author: 'Mike Johnson',
    date: '2021-01-20',
    description: 'Discover the best practices for maintaining a healthy diet.',
  },
};

export const WithCustomAuthor = (args: React.ComponentProps<typeof NewsCard>) => (
  <NewsCard
    {...args}
    slots={{
      author: (
        <AuthorDisplay
          author={args.data.author}
          label="Автор: "
          className="text-blue-600"
          icon={<UserIcon variant="default" size="xs" className="text-blue-500" />}
        />
      ),
    }}
  />
);

WithCustomAuthor.args = {
  data: {
    id: 4,
    title: 'Seasonal Fruits Guide',
    imageUrl: 'news_1.webp',
    author: 'Anna Wilson',
    date: '2021-01-25',
    description: 'Complete guide to seasonal fruits and their nutritional benefits.',
  },
};

export const WithMultipleCustomizations = (args: React.ComponentProps<typeof NewsCard>) => (
  <NewsCard
    {...args}
    slots={{
      badge: (
        <DataBadge
          date={args.data.date}
          className="absolute top-4 left-4 bg-green-500 text-white"
        />
      ),
      author: (
        <AuthorDisplay
          author={args.data.author}
          label="Written by: "
          className="text-purple-600"
          icon={<UserIcon variant="default" size="xs" className="text-purple-500" />}
        />
      ),
      button: (
        <Button variant="outline" className="w-auto">
          <Link to={`/blog/${args.data.id}`}>
            Подробнее <ArrowIcon variant="arrow" size="md" className="text-purple-500" />
          </Link>
        </Button>
      ),
    }}
  />
);

WithMultipleCustomizations.args = {
  data: {
    id: 5,
    title: 'Complete Guide to Organic Vegetables',
    imageUrl: 'news_2.webp',
    author: 'Sarah Green',
    date: '2021-01-30',
    description: 'Everything you need to know about growing and consuming organic vegetables.',
  },
};
