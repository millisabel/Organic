import { SearchBarDefault } from '../features/search/components/SearchBar/SearchBar.stories';
import { styles } from './variants';

export default {
  title: 'StoryGallery/Forms',
};

export const SearchGallery = () => (
  <section className={styles.section}>
    <h2 className={styles.sectionTitle}>FEATURES/</h2>
    <article>
      <h3 className={styles.sectionSubtitle}>Search/</h3>
      <div>
        <h4 className={styles.sectionSubtitle2}>SearchBar/</h4>
        <div>
          <p className={styles.sectionDescription}>
            Features/search/components/SearchBar/SearchBar.tsx
          </p>
          <ul className={styles.listRow}>
            <li className={styles.itemContainer}>
              <h5 className={styles.itemTitle}>default</h5>
              <SearchBarDefault />
            </li>
          </ul>
        </div>
      </div>
    </article>
  </section>
);
