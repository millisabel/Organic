import { MemoryRouter } from 'react-router-dom';
import { styles } from './variants';
import {
  VariantDefault,
  VariantDisabled,
  VariantOutline,
  VariantAccent,
  VariantTransparent,
  VariantClose,
  VariantRed,
  ButtonWithIcon,
  ButtonSizeEllipse,
  ButtonSizeSquare,
  ButtonSizeCircle,
  ButtonSizeCompact,
  ButtonStateLoading,
  ButtonStateSuccess,
} from '@/components/ui/Button/Button.stories';
import { MenuClose, MenuOpen } from '@/components/shared/Button/MenuButton/MenuButton.stories';
import {
  ButtonFacebook,
  ButtonFacebookWithCustomClass,
  ButtonInstagram,
  ButtonPinterest,
  ButtonTwitter,
} from '@/components/shared/Button/SocialButton/SocialButton.stories';
import {
  AddToCartButtonDefault,
  AddToCartButtonInCart,
  AddToCartButtonLoading,
  AddToCartButtonOutOfStock,
} from '@/features/cart/components/buttons/AddToCartButton/AddToCartButton.stories';
import {
  CartButtonDefault,
  CartButtonWithCount,
} from '@/features/cart/components/buttons/CartButton/CartButton.stories';
import {
  GoToCartButtonDefault,
  GoToCartButtonShopSingle,
  GoToCartButtonShopCompact,
} from '@/features/cart/components/buttons/GoToCartButton/GoToCartButton.stories';
import {
  FloatingCartButtonVisualDesktop,
  FloatingCartButtonVisualMobile,
} from '@/features/cart/components/buttons/FloatingCartButton/FloatingCartButton.stories';
import { TrashButtonDefault } from '@/features/cart/components/buttons/TrashButton/TrashButton.stories';
import { SearchButtonDefault } from '@/features/search/components/SearchButton/SearchButton.stories';
import { CloseButtonDefault } from '@/components/shared/Button/CloseButton/CloseButton.stories';

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

export const ButtonsGallery = () => (
  <main>
    {/* Components */}
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>COMPONENTS/</h2>
      <article>
        <h3 className={styles.sectionSubtitle}>UI/</h3>
        <div>
          <h4 className={styles.sectionSubtitle2}>Button/</h4>
          <div>
            <p className={styles.sectionDescription}>Components/ui/Button/variants.ts</p>
            <ul className={styles.listRow}>
              <li className={styles.itemContainer}>
                <VariantDefault />
              </li>
              <li className={styles.itemContainer}>
                <VariantDisabled />
              </li>
              <li className={styles.itemContainer}>
                <VariantOutline />
              </li>
              <li className={styles.itemContainer}>
                <VariantAccent />
              </li>
              <li className={styles.itemContainer}>
                <VariantTransparent />
              </li>
              <li className={styles.itemContainer}>
                <VariantClose />
              </li>
              <li className={styles.itemContainer}>
                <VariantRed />
              </li>
              <li className={styles.itemContainer}>
                <ButtonWithIcon />
              </li>
              <li className={styles.itemContainer}>
                <ButtonSizeCompact />
              </li>
              <li className={styles.itemContainer}>
                <ButtonSizeEllipse />
              </li>
              <li className={styles.itemContainer}>
                <ButtonSizeSquare />
              </li>
              <li className={styles.itemContainer}>
                <ButtonSizeCircle />
              </li>
              <li className={styles.itemContainer}>
                <ButtonStateLoading />
              </li>
              <li className={styles.itemContainer}>
                <ButtonStateSuccess />
              </li>
            </ul>
          </div>
        </div>
      </article>
      {/* Shared */}
      <article>
        <h3 className={styles.sectionSubtitle}>Shared</h3>
        <div>
          <h4 className={styles.sectionSubtitle2}>Button/</h4>
          <p className={styles.sectionDescription}>Components/shared/Button/</p>
          <ul className={styles.listRow}>
            <li className={styles.itemContainer}>
              <ul className={styles.listRow}>
                <li className={styles.itemContainer}>
                  <MenuClose />
                  <p className={styles.itemTitle}>MenuClose</p>
                </li>
                <li className={styles.itemContainer}>
                  <MenuOpen />
                  <p className={styles.itemTitle}>MenuOpen</p>
                </li>
              </ul>
              <p className={styles.itemTitle}>MenuButton</p>
            </li>
            <li className={styles.itemContainer} style={{ position: 'relative' }}>
              <CloseButtonDefault />
              <p className={`${styles.itemTitle}`}>CloseButtonDefault</p>
            </li>
          </ul>
          <div>
            <h5 className={styles.sectionSubtitle3}>Social/</h5>
            <div>
              <p className={styles.sectionDescription}>Components/shared/Button/SocialButton</p>
              <ul className={styles.listRow}>
                <li className={styles.itemContainer}>
                  <ButtonFacebook />
                </li>
                <li className={styles.itemContainer}>
                  <ButtonInstagram />
                </li>
                <li className={styles.itemContainer}>
                  <ButtonTwitter />
                </li>
                <li className={styles.itemContainer}>
                  <ButtonPinterest />
                </li>
                <li className={styles.itemContainer}>
                  <ButtonFacebookWithCustomClass />
                  <p className={styles.itemTitle}>className="text-red-500 bg-primary"</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </article>
    </section>

    {/* FEATURES */}
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>FEATURES/</h2>
      <article>
        <h3 className={styles.sectionSubtitle}>Cart</h3>
        <div>
          <h4 className={styles.sectionSubtitle2}>Button</h4>
          <div>
            <h5 className={styles.sectionSubtitle3}>CartButton</h5>
            <p className={styles.sectionDescription}>
              features/cart/components/buttons/CartButton.tsx
            </p>
            <ul className={styles.listRow}>
              <li className={styles.itemContainer}>
                <CartButtonDefault />
                <p className={styles.itemTitle}>count={0}</p>
              </li>
              <li className={styles.itemContainer}>
                <CartButtonWithCount />
                <p className={styles.itemTitle}>count={10}</p>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.sectionSubtitle3}>AddToCartButton</h5>
            <p className={styles.sectionDescription}>
              features/cart/components/buttons/AddToCartButton.tsx
            </p>
            <ul className={styles.listRow}>
              <li className={styles.itemContainer}>
                <AddToCartButtonDefault />
                <p className={styles.itemTitle}>Default</p>
              </li>
              <li className={styles.itemContainer}>
                <AddToCartButtonInCart />
                <p className={styles.itemTitle}>isInCart="true"</p>
              </li>
              <li className={styles.itemContainer}>
                <AddToCartButtonOutOfStock />
                <p className={styles.itemTitle}>isOutOfStock="true"</p>
              </li>
              <li className={styles.itemContainer}>
                <AddToCartButtonLoading />
                <p className={styles.itemTitle}>isLoading="true"</p>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.sectionSubtitle3}>GoToCartButton</h5>
            <p className={styles.sectionDescription}>
              features/cart/components/buttons/GoToCartButton.tsx
            </p>
            <ul className={styles.listRow}>
              <li className={styles.itemContainer}>
                <GoToCartButtonDefault />
                <p className={styles.itemTitle}>Default</p>
              </li>
              <li className={styles.itemContainer}>
                <GoToCartButtonShopSingle />
                <p className={styles.itemTitle}>mode="shopSingle"</p>
              </li>
              <li className={styles.itemContainer}>
                <GoToCartButtonShopCompact />
                <p className={styles.itemTitle}>mode="shopCompact"</p>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.sectionSubtitle3}>TrashButton</h5>
            <p className={styles.sectionDescription}>
              features/cart/components/buttons/TrashButton.tsx
            </p>
            <ul className={styles.listRow}>
              <li className={styles.itemContainer}>
                <TrashButtonDefault />
                <p className={styles.itemTitle}>Default</p>
              </li>
            </ul>
          </div>
          <div>
            <h5 className={styles.sectionSubtitle3}>FloatingCartButton</h5>
            <p className={styles.sectionDescription}>
              features/cart/components/buttons/FloatingCartButton.tsx
            </p>
            <ul className={styles.listRow}>
              <li className={styles.itemContainer}>
                <FloatingCartButtonVisualDesktop />
                <p className={styles.itemTitle}>Desktop</p>
              </li>
              <li className={styles.itemContainer}>
                <FloatingCartButtonVisualMobile />
                <p className={styles.itemTitle}>Mobile</p>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article>
        <h3 className={styles.sectionSubtitle}>Search</h3>
        <div>
          <h4 className={styles.sectionSubtitle2}>SearchButton</h4>
          <p className={styles.sectionDescription}>features/search/components/SearchButton.tsx</p>
          <ul className={styles.listRow}>
            <li className={styles.itemContainer}>
              <SearchButtonDefault />
              <p className={styles.itemTitle}>Default</p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  </main>
);
