import { getStoryDescription } from '@/utils/storiesHelpers';
import GalleryCard from './GalleryCard';

export default {
  title: 'Components/Card/Shared/GalleryCard',
  component: GalleryCard,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'GalleryCard',
          source: 'src/components/shared/Card/GalleryCard/GalleryCard.tsx',
        }),
      },
    },
  },
};

const data = {
  id: 1,
  title: 'Gallery Card',
  image: 'gallery_center.webp',
  imageSize: {
    width: 400,
    height: 400,
  },
};

export const Default = (args: React.ComponentProps<typeof GalleryCard>) => (
  <GalleryCard {...args} data={data} />
);

Default.args = {
  data: {
    id: 1,
    title: 'Gallery Card',
    image: 'gallery/gallery-1.jpg',
    imageSize: {
      width: 400,
      height: 400,
    },
  },
};
