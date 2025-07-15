import MenuButton from '../components/shared/Button/MenuButton/MenuButton';
import CloseButton from '../components/shared/Button/CloseButton/CloseButton';
import SocialButton from '../components/shared/Button/SocialButton/SocialButton';
import Button from '@/components/ui/Button/Button';
import SearchButton from '@/features/search/components/SearchButton';
import CartButton from '@/features/cart/components/buttons/CartButton';
import { MemoryRouter } from 'react-router-dom';
import AddToCartButton from '@/features/cart/components/buttons/AddToCartButton';
import GoToCartButton from '@/features/cart/components/buttons/GoToCartButton';
import TrashButton from '@/features/cart/components/buttons/TrashButton/TrashButton';
import { styles } from './variants';

export default {
  title: 'StoryGallery/AllButtons',
  decorators: [
    (Story: React.ComponentType) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
};

export const Gallery = () => (
  <main>
    {/* Components */}
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>COMPONENTS/</h2>
      {/* UI */}
      <article>
        <h3 className={styles.sectionSubtitle}>UI</h3>
        <div>
          <h4 className={styles.sectionSubtitle2}>Button</h4>
          <p className={styles.sectionDescription}>Components/ui/Button/variants.ts</p>
          <div className={styles.contentContainer}>
            <Button variant="default">Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="transparent">Transparent</Button>
            <Button variant="close">Close</Button>
            <Button variant="red">Red</Button>
          </div>
        </div>
      </article>
      {/* Shared */}
      <article>
        <h3 className={styles.sectionSubtitle}>Shared</h3>
        {/* Social Button */}
        <div>
          <h4 className={styles.sectionSubtitle2}>Social Button</h4>
          <p className={styles.sectionDescription}>Components/shared/Button/SocialButton.tsx</p>
          <div className={styles.contentContainer}>
            <SocialButton type="facebook" href="https://facebook.com" />
            <SocialButton type="instagram" href="https://www.instagram.com" />
            <SocialButton type="twitter" href="https://www.twitter.com" />
            <SocialButton type="pinterest" href="https://www.pinterest.com" />
            <SocialButton
              type="facebook"
              href="https://www.facebook.com"
              className="text-red-500 bg-primary"
            />
          </div>
        </div>
        {/* Menu Button */}
        <div>
          <h4 className={styles.sectionSubtitle2}>Menu Button</h4>
          <p className={styles.sectionDescription}>Components/shared/Button/MenuButton.tsx</p>
          <div className={styles.contentContainer}>
            <MenuButton isOpen={false} onClick={() => {}} />
          </div>
        </div>
        {/* Close Button */}
        <div>
          <h4 className={styles.sectionSubtitle2}>Close Button</h4>
          <p className={styles.sectionDescription}>Components/shared/Button/CloseButton.tsx</p>
          <div
            className={styles.contentContainer}
            style={{ position: 'relative', height: '100px' }}
          >
            <CloseButton onClick={() => {}} />
          </div>
        </div>
      </article>
    </section>

    {/* FEATURES */}
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>FEATURES/</h2>
      <article>
        {/* Cart */}
        <h3 className={styles.sectionSubtitle}>Cart</h3>
        {/* CartButton */}
        <div>
          <h4 className={styles.sectionSubtitle2}>CartButton</h4>
          <p className={styles.sectionDescription}>
            features/cart/components/buttons/CartButton.tsx
          </p>
          <div className={styles.contentContainer}>
            <CartButton count={0} />
            <CartButton count={10} />
          </div>
        </div>
        {/* AddToCartButton */}
        <div>
          <h4 className={styles.sectionSubtitle2}>AddToCartButton</h4>
          <p className={styles.sectionDescription}>
            features/cart/components/buttons/AddToCartButton.tsx
          </p>
          <div className={styles.contentContainer}>
            <AddToCartButton
              isInCart={false}
              isLoading={false}
              isOutOfStock={false}
              onClick={() => {}}
            />
            <AddToCartButton
              isInCart={true}
              isLoading={false}
              isOutOfStock={false}
              onClick={() => {}}
            />
            <AddToCartButton
              isInCart={false}
              isLoading={false}
              isOutOfStock={true}
              onClick={() => {}}
            />
            <AddToCartButton
              isInCart={false}
              isLoading={true}
              isOutOfStock={false}
              onClick={() => {}}
            />
          </div>
        </div>
        {/* GoToCartButton */}
        <div>
          <h4 className={styles.sectionSubtitle2}>GoToCartButton</h4>
          <p className={styles.sectionDescription}>
            features/cart/components/buttons/GoToCartButton.tsx
          </p>
          <div className={styles.contentContainer}>
            <GoToCartButton mode="shopSingle" />
            <GoToCartButton mode="shopCompact" />
          </div>
        </div>
        {/* TrashButton */}
        <div>
          <h4 className={styles.sectionSubtitle2}>TrashButton</h4>
          <p className={styles.sectionDescription}>
            features/cart/components/buttons/TrashButton.tsx
          </p>
          <div className={styles.contentContainer}>
            <TrashButton handleRemove={() => {}} />
          </div>
        </div>
      </article>

      {/* Search */}
      <article>
        <h3 className={styles.sectionSubtitle}>Search</h3>
        {/* SearchButton */}
        <div>
          <h4 className={styles.sectionSubtitle2}>SearchButton</h4>
          <p className={styles.sectionDescription}>features/search/components/SearchButton.tsx</p>
          <div className={styles.contentContainer}>
            <SearchButton />
          </div>
        </div>
      </article>
    </section>
  </main>
);
