// Импортируем все иконки
import { getStoryDescription } from '@/utils/storiesHelpers';
import ArrowIcon from './ArrowIcon';
import CartIcon from './CartIcon';
import CheckIcon from './CheckIcon';
import CloseIcon from './CloseIcon';
import MenuIcon from './MenuIcon';
import SearchIcon from './SearchIcon';
import SpinnerIcon from './SpinnerIcon';
import StarIcon from './StarIcon';
import TrashIcon from './TrashIcon';
import UserIcon from './UserIcon';
import FacebookIcon from './social/FacebookIcon';
import InstagramIcon from './social/InstagramIcon';
import PinterestIcon from './social/PinterestIcon';
import TwitterIcon from './social/TwitterIcon';

// Объект со всеми иконками
const icons = {
  SearchIcon,
  CartIcon,
  UserIcon,
  MenuIcon,
  CloseIcon,
  CheckIcon,
  StarIcon,
  TrashIcon,
  ArrowIcon,
  SpinnerIcon,
  FacebookIcon,
  InstagramIcon,
  TwitterIcon,
  PinterestIcon,
};

export default {
  title: 'Components/Icon/IconGallery',
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Icon',
          source: 'src/components/shared/Icon/IconGallery.stories.tsx',
        }),
      },
      toc: true,
    },
  },
};

export const AllIcons = () => (
  <div className="grid grid-cols-4 gap-4 p-4">
    {Object.entries(icons).map(([name, IconComponent]) => (
      <div key={name} className="flex flex-col items-center p-4 border rounded">
        <IconComponent size="lg" />
        <span className="mt-2 text-sm text-gray-600">{name}</span>
      </div>
    ))}
  </div>
);

export const SocialIcons = () => (
  <div className="grid grid-cols-4 gap-4 p-4">
    <div className="flex flex-col items-center p-4 border rounded">
      <FacebookIcon size="lg" />
      <span className="mt-2 text-sm text-gray-600">Facebook</span>
    </div>
    <div className="flex flex-col items-center p-4 border rounded">
      <InstagramIcon size="lg" />
      <span className="mt-2 text-sm text-gray-600">Instagram</span>
    </div>
    <div className="flex flex-col items-center p-4 border rounded">
      <TwitterIcon size="lg" />
      <span className="mt-2 text-sm text-gray-600">Twitter</span>
    </div>
    <div className="flex flex-col items-center p-4 border rounded">
      <PinterestIcon size="lg" />
      <span className="mt-2 text-sm text-gray-600">Pinterest</span>
    </div>
  </div>
);

export const ActionIcons = () => (
  <div className="grid grid-cols-4 gap-4 p-4">
    <div className="flex flex-col items-center p-4 border rounded">
      <SearchIcon size="lg" />
      <span className="mt-2 text-sm text-gray-600">Search</span>
    </div>
    <div className="flex flex-col items-center p-4 border rounded">
      <CartIcon size="lg" />
      <span className="mt-2 text-sm text-gray-600">Cart</span>
    </div>
    <div className="flex flex-col items-center p-4 border rounded">
      <UserIcon size="lg" />
      <span className="mt-2 text-sm text-gray-600">User</span>
    </div>
    <div className="flex flex-col items-center p-4 border rounded">
      <MenuIcon size="lg" />
      <span className="mt-2 text-sm text-gray-600">Menu</span>
    </div>
  </div>
);
