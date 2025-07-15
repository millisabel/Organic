import Icon from '@/components/ui/Icon';
import { styles } from './variants';

export default {
  title: 'StoryGallery/AllIcons',
};

export const GalleryIcons = () => (
  <main>
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Icons</h2>
      <article>
        <h3 className={styles.sectionSubtitle}>Icons</h3>
        <div className={styles.contentContainer}>
          <h4 className={styles.sectionSubtitle2}>Icon</h4>
          <p className={styles.sectionDescription}>Components/ui/Icon/variants.ts</p>
          <div className={styles.contentContainer}>
            <Icon name="cart" />
          </div>
        </div>
      </article>
    </section>
  </main>
);
