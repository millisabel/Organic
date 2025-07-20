import { getStoryDescription } from '@/utils/storiesHelpers';
import Image from './Image';

export default {
  title: 'Components/Image/UI',
  component: Image,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/ui/Image/Image.stories.tsx',
        }),
      },
    },
  },
};

export const Icon = () => (
  <div className="w-32 h-32 bg-gray-100 rounded-lg p-4 flex items-center justify-center">
    <Image
      src="tractor.svg"
      folder="ico"
      className="w-full h-full object-contain"
      aria-hidden={true}
    />
  </div>
);

export const RegularImage = () => (
  <div className="w-64 h-48">
    <Image src="banner_1.webp" folder="banner" alt="Banner image" className="rounded-lg" />
  </div>
);

export const ExternalImage = () => (
  <div className="w-64 h-48">
    <Image src="https://via.placeholder.com/400x300" alt="External image" className="rounded-lg" />
  </div>
);

export const IconWithoutFolder = () => (
  <div className="w-32 h-32 bg-blue-100 rounded-lg p-4 flex items-center justify-center">
    <Image
      src="/src/assets/images/ico/chemical_plant.svg"
      alt="Chemical plant icon"
      className="w-full h-full object-contain"
      aria-hidden={true}
    />
  </div>
);

export const ProductImage = () => (
  <div className="w-48 h-48">
    <Image src="Banana.webp" folder="products" alt="Banana product" className="rounded-lg" />
  </div>
);
