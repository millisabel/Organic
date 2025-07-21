import { getStoryDescription } from '@/utils/storiesHelpers';
import { MemoryRouter } from 'react-router-dom';
import BannerCard from './BannerCard';

export default {
  title: 'Components/Card/Shared/BannerCard',
  component: BannerCard,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Card/BannerCard/BannerCard.tsx',
        }),
      },
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <MemoryRouter>
        <div className="w-full bg-primary p-4 h-[500px] mx-auto">
          <Story />
        </div>
      </MemoryRouter>
    ),
  ],
};

export const Default = (args: React.ComponentProps<typeof BannerCard>) => <BannerCard {...args} />;

Default.args = {
  imageUrl: 'banner_1.webp',
  subtitle: 'Natural!!',
  title: 'Get Garden Fresh Fruits',
  backFeatures: ['100% Organic', 'Fresh from Farm', 'No Pesticides', 'Best Quality'],
  flipDirection: 'right',
  titleColor: 'white',
  accentColor: 'rgb(34 197 94)', // green-300
};

export const WithLeftFlip = (args: React.ComponentProps<typeof BannerCard>) => (
  <BannerCard {...args} />
);

WithLeftFlip.args = {
  imageUrl: 'banner_2.webp',
  subtitle: 'Fresh!!',
  title: 'Get Fresh Vegetables',
  backFeatures: ['Locally Grown', 'Seasonal Selection', 'Eco-Friendly', 'Premium Quality'],
  category: 'Vegetables',
  flipDirection: 'left',
  titleColor: 'white',
  accentColor: 'rgb(59 130 246)', // blue-500
};

export const DarkTheme = (args: React.ComponentProps<typeof BannerCard>) => (
  <BannerCard {...args} />
);

DarkTheme.args = {
  imageUrl: 'banner_1.webp',
  subtitle: 'Premium!!',
  title: 'Organic Premium Selection',
  backFeatures: ['Premium Quality', 'Hand Picked', 'Certified Organic', 'Best Taste'],
  category: 'Premium',
  flipDirection: 'right',
  titleColor: 'black',
  accentColor: 'rgb(239 68 68)', // red-500
};

export const ColorfulTheme = (args: React.ComponentProps<typeof BannerCard>) => (
  <BannerCard {...args} />
);

ColorfulTheme.args = {
  imageUrl: 'banner_2.webp',
  subtitle: 'Exotic!!',
  title: 'Exotic Fruits Collection',
  backFeatures: ['Exotic Varieties', 'Unique Flavors', 'Rare Selection', 'Premium Import'],
  category: 'Exotic',
  flipDirection: 'left',
  titleColor: 'rgb(147 51 234)', // purple-600
  accentColor: 'rgb(245 158 11)', // amber-500
};
