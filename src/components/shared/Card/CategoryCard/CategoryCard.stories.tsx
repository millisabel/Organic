import Card from '@/components/ui/Card';
import CardContent from '@/components/ui/Card/components/CardContent';
import CardHeader from '@/components/ui/Card/components/CardHeader';
import Image from '@/components/ui/Image';
import { getStoryDescription } from '@/utils/storiesHelpers';
import type { CategoryCardProps } from './types';
import Title from '@/components/ui/Typography/Title';

// Mock version of CategoryCard without React Router for Storybook
const CategoryCardMock = ({ data }: CategoryCardProps) => {
  const { name, imageUrl } = data;
  return (
    <div data-component="CategoryCard" className="w-full bg-primary p-4">
      <Card nameComponent="CategoryCard" variant="notShadow" className="w-[335px] bg-transparent">
        <CardHeader className="overflow-hidden group-hover:rounded-[150px] transition-all duration-500 will-change-rounded">
          <Image
            src={imageUrl}
            alt={name}
            folder="categories"
            className="h-[300px] rounded-[30px] group-hover:scale-110 transition-all duration-1000 bg-white object-contain"
          />
        </CardHeader>
        <CardContent className="p-4">
          <Title
            variant="cardTitle"
            className="text-white group-hover:scale-125 transition-all duration-1000"
          >
            {name}
          </Title>
        </CardContent>
      </Card>
    </div>
  );
};

export default {
  title: 'Components/Card/Shared/CategoryCard',
  component: CategoryCardMock,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'CategoryCard',
          source: 'src/components/shared/Card/CategoryCard/CategoryCard.tsx',
        }),
      },
    },
    decorators: [
      (Story: React.ComponentType) => (
        <div className="w-full">
          <Story />
        </div>
      ),
    ],
  },
};

const category = {
  name: 'Category 1',
  imageUrl: 'Vegetable.webp',
};

export const Default = (args: React.ComponentProps<typeof CategoryCardMock>) => (
  <CategoryCardMock {...args} />
);

Default.args = {
  data: {
    name: category.name,
    imageUrl: category.imageUrl,
  },
};
