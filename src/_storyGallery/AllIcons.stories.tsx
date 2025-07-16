import CartIcon from '@/components/shared/Icon/CartIcon';
import CheckIcon from '@/components/shared/Icon/CheckIcon';
import CloseIcon from '@/components/shared/Icon/CloseIcon';
import FacebookIcon from '@/components/shared/Icon/social/FacebookIcon';
import Icon from '@/components/ui/Icon/Icon';
import { storyGalleryVariants } from './variants';
import InstagramIcon from '@/components/shared/Icon/social/InstagramIcon';
import PinterestIcon from '@/components/shared/Icon/social/PinterestIcon';
import TwitterIcon from '@/components/shared/Icon/social/TwitterIcon';
import MenuIcon from '@/components/shared/Icon/MenuIcon';
import SearchIcon from '@/components/shared/Icon/SearchIcon';
import SpinnerIcon from '@/components/shared/Icon/SpinnerIcon';
import StarIcon from '@/components/shared/Icon/StarIcon';
import TrashIcon from '@/components/shared/Icon/TrashIcon';
import UserIcon from '@/components/shared/Icon/UserIcon';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import LogoIcon from '@/components/shared/Icon/LogoIcon';

export default {
  title: 'StoryGallery/AllIcons',
};

export const GalleryIcons = () => (
  <main>
    <section>
      <h2 className={storyGalleryVariants.title}>COMPONENTS/</h2>
      <article>
        <h3 className={storyGalleryVariants.subtitle}>components\ui\Icon</h3>
        <ul className={storyGalleryVariants.list}>
          <li className={storyGalleryVariants.item}>
            <Icon />
            <p className={storyGalleryVariants.itemTitle}>{'<Icon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <Icon variant="arrow" />
            <p className={storyGalleryVariants.itemTitle}>{'<Icon variant="arrow" />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <Icon variant="spinner" />
            <p className={storyGalleryVariants.itemTitle}>{'<Icon variant="spinner" />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <Icon size="sm" />
            <p className={storyGalleryVariants.itemTitle}>{'<Icon size="sm" />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <Icon size="md" />
            <p className={storyGalleryVariants.itemTitle}>{'<Icon size="md" />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <Icon size="lg" />
            <p className={storyGalleryVariants.itemTitle}>{'<Icon size="lg" />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <Icon size="lg" />
            <p className={storyGalleryVariants.itemTitle}>{'<Icon size="lg" />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <Icon rounded="full" className="bg-red-400" />
            <p className={storyGalleryVariants.itemTitle}>
              {'<Icon rounded="full" className="bg-red-400" />'}
            </p>
          </li>
          <li className={storyGalleryVariants.item}>
            <Icon className="text-red-400 bg-yellow-400" />
            <p className={storyGalleryVariants.itemTitle}>
              {'<Icon className="text-red-400 bg-yellow-400" />'}
            </p>
          </li>
        </ul>
      </article>
      <article>
        <h3 className={storyGalleryVariants.subtitle}>components\shared\Icon</h3>
        <ul className={storyGalleryVariants.list}>
          <li className={storyGalleryVariants.item}>
            <CartIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<CartIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <CloseIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<CloseIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <CheckIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<CheckIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <MenuIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<MenuIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <SearchIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<SearchIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <SpinnerIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<SpinnerIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <StarIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<StarIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <TrashIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<TrashIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <UserIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<UserIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <ArrowIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<ArrowIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <LogoIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<LogoIcon />'}</p>
          </li>
        </ul>
      </article>
      <article>
        <h3 className={storyGalleryVariants.subtitle}>components\shared\Icon\social</h3>
        <ul className={storyGalleryVariants.list}>
          <li className={storyGalleryVariants.item}>
            <FacebookIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<FacebookIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <InstagramIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<InstagramIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <PinterestIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<PinterestIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <TwitterIcon />
            <p className={storyGalleryVariants.itemTitle}>{'<TwitterIcon />'}</p>
          </li>
          <li className={storyGalleryVariants.item}>
            <TwitterIcon className="text-blue-500" />
            <p className={storyGalleryVariants.itemTitle}>
              {'<TwitterIcon className="text-blue-500" />'}
            </p>
          </li>
          <li className={storyGalleryVariants.item}>
            <TwitterIcon className="bg-blue-500" />
            <p className={storyGalleryVariants.itemTitle}>
              {'<TwitterIcon className="bg-blue-500" />'}
            </p>
          </li>
          <li className={storyGalleryVariants.item}>
            <TwitterIcon className="bg-blue-500 text-white" rounded="full" size="lg" />
            <p className={storyGalleryVariants.itemTitle}>
              {'<TwitterIcon className="bg-blue-500 text-white" rounded="full" size="lg" />'}
            </p>
          </li>
        </ul>
      </article>
    </section>
  </main>
);
