import { BadgeButtonDefault } from '@/components/ui/Badge/BadgeButton/BadgeButton.stories';
import { CartCountBadgeDefault } from '@/components/ui/Badge/CartCountBadge/CartCountBadge.stories';
import {
  DataBadgeDefault,
  DataBadgeLong,
  DataBadgeShort,
} from '@/components/ui/Badge/DataBadge/DataBadge.stories';
import {
  StatusBadgeDefault,
  StatusBadgeInCart,
  StatusBadgeNew,
  StatusBadgeOutOfStock,
  StatusBadgeSale,
} from '@/components/ui/Badge/StatusBadge/StatusBadge.stories';
import { storyGalleryVariants } from './variants';

export default {
  title: 'StoryGallery/AllBadge',
};

export const BadgeGallery = () => (
  <section>
    <h2 className={storyGalleryVariants.title}>components/</h2>
    <article>
      <h3 className={storyGalleryVariants.subtitle}>components\ui\Badge\BadgeButton/</h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <BadgeButtonDefault />
          <p className={storyGalleryVariants.itemTitle}>
            {'<BadgeButton text="Category" handleCategoryClick={() => {}} />'}
          </p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>components\ui\Badge\CartCountBadge/</h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <CartCountBadgeDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<CartCountBadge count={5} />'}</p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>components\ui\Badge\DataBadge/</h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <DataBadgeDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<DataBadge date={new Date()} />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <DataBadgeShort />
          <p className={storyGalleryVariants.itemTitle}>
            {'<DataBadge date={new Date("2025-06-15")} format="short" />'}
          </p>
        </li>
        <li className={storyGalleryVariants.item}>
          <DataBadgeLong />
          <p className={storyGalleryVariants.itemTitle}>
            {'<DataBadge date={new Date("15 Jul 2025")} format="long" />'}
          </p>
        </li>
      </ul>
    </article>

    <article className="min-w-1">
      <h3 className={storyGalleryVariants.subtitle}>components\ui\Badge\StatusBadge/</h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <StatusBadgeDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<StatusBadge />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <StatusBadgeNew />
          <p className={storyGalleryVariants.itemTitle}>{'<StatusBadge variant="new" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <StatusBadgeSale />
          <p className={storyGalleryVariants.itemTitle}>{'<StatusBadge variant="sale" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <StatusBadgeInCart />
          <p className={storyGalleryVariants.itemTitle}>{'<StatusBadge variant="inCart" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <StatusBadgeOutOfStock />
          <p className={storyGalleryVariants.itemTitle}>{'<StatusBadge variant="outOfStock" />'}</p>
        </li>
      </ul>
    </article>
  </section>
);
