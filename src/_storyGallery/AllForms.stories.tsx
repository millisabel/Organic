import { SearchBarDefault } from '../features/search/components/SearchBar/SearchBar.stories';
import { storyGalleryVariants } from './variants';

export default {
  title: 'StoryGallery/Forms',
};

export const SearchGallery = () => (
  <section>
    <h2 className={storyGalleryVariants.title}>FEATURES/</h2>
    <article>
      <h3 className={storyGalleryVariants.subtitle}>
        features\search\components\SearchBar\SearchBar.tsx
      </h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <SearchBarDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<SearchBarDefault />'}</p>
        </li>
      </ul>
    </article>
  </section>
);
