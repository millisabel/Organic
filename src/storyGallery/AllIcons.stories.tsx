import CartIcon from '@/components/shared/Icon/CartIcon';
import CheckIcon from '@/components/shared/Icon/CheckIcon';
import CloseIcon from '@/components/shared/Icon/CloseIcon';
import FacebookIcon from '@/components/shared/Icon/social/FacebookIcon';
import Icon from '@/components/ui/Icon/Icon';
import { styles } from './variants';
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
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>COMPONENTS/</h2>
      <article>
        <h3 className={styles.sectionSubtitle}>UI/</h3>
        <div>
          <h4 className={styles.sectionSubtitle2}>Icon/</h4>
          <div>
            <p className={styles.sectionDescription}>Components/ui/Icon/Icon.tsx</p>
            <ul className={styles.listRow}>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>default</h5>
                <Icon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>variant="arrow"</h5>
                <Icon variant="arrow" />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>variant="spinner"</h5>
                <Icon variant="spinner" />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>size="sm"</h5>
                <Icon size="sm" />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>size="md"</h5>
                <Icon size="md" />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>size="lg"</h5>
                <Icon size="lg" />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>size="xl"</h5>
                <Icon size="xl" />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>rounded="full" className="bg-red-400"</h5>
                <Icon rounded="full" className="bg-red-400" />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>className="text-red-400 bg-yellow-400"</h5>
                <Icon className="text-red-400 bg-yellow-400" />
              </li>
            </ul>
          </div>
        </div>
      </article>
      {/* Shared */}
      <article>
        <h3 className={styles.sectionSubtitle}>SHARED/</h3>
        <div>
          <h4 className={styles.sectionSubtitle2}>Icon/</h4>
          <div>
            <p className={styles.sectionDescription}>Components/shared/Icon</p>
            <ul className={styles.listRow}>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>CartIcon</h5>
                <CartIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>CloseIcon</h5>
                <CloseIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>CheckIcon</h5>
                <CheckIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>MenuIcon</h5>
                <MenuIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>SearchIcon</h5>
                <SearchIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>SpinnerIcon</h5>
                <SpinnerIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>StarIcon</h5>
                <StarIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>TrashIcon</h5>
                <TrashIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>UserIcon</h5>
                <UserIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>ArrowIcon</h5>
                <ArrowIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>LogoIcon</h5>
                <LogoIcon />
              </li>
            </ul>
            <h4 className={styles.sectionSubtitle2}>Social</h4>
            <p className={styles.sectionDescription}>Components/shared/Icon/social</p>
            <ul className={styles.listRow}>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>FacebookIcon</h5>
                <FacebookIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>InstagramIcon</h5>
                <InstagramIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>PinterestIcon</h5>
                <PinterestIcon />
              </li>
              <li className={styles.itemContainer}>
                <h5 className={styles.itemTitle}>TwitterIcon</h5>
                <TwitterIcon />
              </li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  </main>
);
