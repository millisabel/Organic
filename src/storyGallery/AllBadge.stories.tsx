import { BadgeButtonDefault } from '@/components/ui/Badge/BadgeButton/BadgeButton.stories';
import { styles } from './variants';
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
  StatusBadgeSale,
  StatusBadgeOutOfStock,
} from '@/components/ui/Badge/StatusBadge/StatusBadge.stories';

export default {
  title: 'StoryGallery/AllBadge',
};

export const BadgeGallery = () => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>components/</h2>
    <article>
      <h3 className={styles.sectionSubtitle}>ui/</h3>
      <div>
        <h4 className={styles.sectionSubtitle2}>Badge/</h4>
        <div>
          <h5 className={styles.sectionSubtitle3}>BadgeButton</h5>
          <p className={styles.sectionDescription}>Badge/ui/Badge/BadgeButton/BadgeButton.tsx</p>
          <ul className={styles.listRow}>
            <li className={styles.itemContainer}>
              <BadgeButtonDefault />
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.sectionSubtitle3}>CartCountBadge</h5>
          <p className={styles.sectionDescription}>
            Badge/ui/Badge/CartCountBadge/CartCountBadge.tsx
          </p>
          <ul className={styles.listRow}>
            <li className={styles.itemContainer}>
              <CartCountBadgeDefault />
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.sectionSubtitle3}>DataBadge</h5>
          <p className={styles.sectionDescription}>Badge/ui/Badge/DataBadge/DataBadge.tsx</p>
          <ul className={styles.listRow}>
            <li className={styles.itemContainer}>
              <DataBadgeDefault />
              <p className={styles.itemTitle}>default</p>
            </li>
            <li className={styles.itemContainer}>
              <DataBadgeShort />
              <p className={styles.itemTitle}>short</p>
            </li>
            <li className={styles.itemContainer}>
              <DataBadgeLong />
              <p className={styles.itemTitle}>long</p>
            </li>
          </ul>
        </div>
        <div>
          <h5 className={styles.sectionSubtitle3}>StatusBadge</h5>
          <p className={styles.sectionDescription}>Badge/ui/Badge/StatusBadge/StatusBadge.tsx</p>
          <ul className={styles.listRow}>
            <li className={styles.itemContainer}>
              <ul className={styles.listRow}>
                <li className={styles.itemContainer}>
                  <StatusBadgeDefault />
                </li>
                <li className={styles.itemContainer}>
                  <StatusBadgeNew />
                </li>
                <li className={styles.itemContainer}>
                  <StatusBadgeSale />
                </li>
                <li className={styles.itemContainer}>
                  <StatusBadgeInCart />
                </li>
                <li className={styles.itemContainer}>
                  <StatusBadgeOutOfStock />
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </article>

    <h2>Badge/ui/Badge/</h2>
    <ul className={styles.listRow}>
      <li className={styles.itemContainer}>
        <BadgeButtonDefault />
      </li>
    </ul>
    <h2>Badge/ui/Badge/</h2>
    <ul className={styles.listRow}>
      <li className={styles.itemContainer}>
        <CartCountBadgeDefault />
      </li>
    </ul>
    <h2>Badge/ui/Badge/</h2>
    <ul className={styles.listRow}>
      <li className={styles.itemContainer}>
        <DataBadgeDefault />
        <p className={styles.itemTitle}>default</p>
      </li>
      <li className={styles.itemContainer}>
        <DataBadgeShort />
        <p className={styles.itemTitle}>short</p>
      </li>
      <li className={styles.itemContainer}>
        <DataBadgeLong />
        <p className={styles.itemTitle}>long</p>
      </li>
    </ul>
    <h2>Badge/ui/Badge/</h2>
    <ul className={styles.listRow}>
      <li className={styles.itemContainer}>
        <ul className={styles.listRow}>
          <li className={styles.itemContainer}>
            <StatusBadgeDefault />
          </li>
          <li className={styles.itemContainer}>
            <StatusBadgeNew />
          </li>
          <li className={styles.itemContainer}>
            <StatusBadgeSale />
          </li>
          <li className={styles.itemContainer}>
            <StatusBadgeInCart />
          </li>
          <li className={styles.itemContainer}>
            <StatusBadgeOutOfStock />
          </li>
        </ul>
      </li>
    </ul>
  </section>
);
