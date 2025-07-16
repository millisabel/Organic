import { MemoryRouter } from 'react-router-dom';
import { storyGalleryVariants } from './variants';
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
  <section>
    <h2>COMPONENTS/</h2>
    <article>
      <h3 className={storyGalleryVariants.subtitle}>components\ui\Button</h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <VariantDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<Button />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <VariantDisabled />
          <p className={storyGalleryVariants.itemTitle}>{'<Button disabled state="disabled" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <VariantOutline />
          <p className={storyGalleryVariants.itemTitle}>{'<Button variant="outline" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <VariantAccent />
          <p className={storyGalleryVariants.itemTitle}>{'<Button variant="accent" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <VariantTransparent />
          <p className={storyGalleryVariants.itemTitle}>{'<Button variant="transparent" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <VariantClose />
          <p className={storyGalleryVariants.itemTitle}>{'<Button variant="close" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <VariantRed />
          <p className={storyGalleryVariants.itemTitle}>{'<Button variant="red" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonWithIcon />
          <p className={storyGalleryVariants.itemTitle}>{'<Button variant="default" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonSizeCompact />
          <p className={storyGalleryVariants.itemTitle}>{'<Button size="compact" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonSizeEllipse />
          <p className={storyGalleryVariants.itemTitle}>{'<Button size="ellipse" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonSizeSquare />
          <p className={storyGalleryVariants.itemTitle}>{'<Button size="square" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonSizeCircle />
          <p className={storyGalleryVariants.itemTitle}>{'<Button size="circle" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonStateLoading />
          <p className={storyGalleryVariants.itemTitle}>{'<Button state="loading" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonStateSuccess />
          <p className={storyGalleryVariants.itemTitle}>{'<Button state="success" />'}</p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>
        components\shared\Button\MenuButton\MenuButton.tsx
      </h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <MenuClose />
          <p className={storyGalleryVariants.itemTitle}>
            {'<MenuButton isOpen={false} onClick={() => {} />'}
          </p>
        </li>
        <li className={storyGalleryVariants.item}>
          <MenuOpen />
          <p className={storyGalleryVariants.itemTitle}>
            {'<MenuButton isOpen={true} onClick={() => {} />'}
          </p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>
        components\shared\Button\CloseButton\CloseButton.tsx
      </h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item} style={{ position: 'relative' }}>
          <CloseButtonDefault />
          <p className={`${storyGalleryVariants.itemTitle}`}>{'<CloseButton />'}</p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>
        components\shared\Button\SocialButton\SocialButton.tsx
      </h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <ButtonFacebook />
          <p className={storyGalleryVariants.itemTitle}>
            {'<SocialButton type="facebook" href="https://www.facebook.com" />'}
          </p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonInstagram />
          <p className={storyGalleryVariants.itemTitle}>
            {'<SocialButton type="instagram" href="https://www.instagram.com" />'}
          </p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonTwitter />
          <p className={storyGalleryVariants.itemTitle}>
            {'<SocialButton type="twitter" href="https://www.twitter.com" />'}
          </p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonPinterest />
          <p className={storyGalleryVariants.itemTitle}>
            {'<SocialButton type="pinterest" href="https://www.pinterest.com" />'}
          </p>
        </li>
        <li className={storyGalleryVariants.item}>
          <ButtonFacebookWithCustomClass />
          <p className={storyGalleryVariants.itemTitle}>
            {
              '<SocialButton type="facebook" href="https://www.facebook.com" className="text-red-500 bg-primary" />'
            }
          </p>
        </li>
      </ul>
    </article>

    <h2>FEATURES/</h2>
    <article>
      <h3 className={storyGalleryVariants.subtitle}>features\cart\components\buttons</h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <CartButtonDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<CartButton count={0} />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <CartButtonWithCount />
          <p className={storyGalleryVariants.itemTitle}>{'<CartButton count={10} />'}</p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>
        features\cart\components\buttons\AddToCartButton
      </h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <AddToCartButtonDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<AddToCartButton />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <AddToCartButtonInCart />
          <p className={storyGalleryVariants.itemTitle}>
            {
              '<AddToCartButton isInCart={true} isLoading={false} isOutOfStock={false} onClick={() => {} />'
            }
          </p>
        </li>
        <li className={storyGalleryVariants.item}>
          <AddToCartButtonOutOfStock />
          <p className={storyGalleryVariants.itemTitle}>
            {
              '<AddToCartButton isInCart={false} isLoading={false} isOutOfStock={true} onClick={() => {} />'
            }
          </p>
        </li>
        <li className={storyGalleryVariants.item}>
          <AddToCartButtonLoading />
          <p className={storyGalleryVariants.itemTitle}>
            {
              '<AddToCartButton isInCart={false} isLoading={true} isOutOfStock={false} onClick={() => {} />'
            }
          </p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>
        features\cart\components\buttons\GoToCartButton\GoToCartButton.tsx
      </h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <GoToCartButtonDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<GoToCartButton />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <GoToCartButtonShopSingle />
          <p className={storyGalleryVariants.itemTitle}>{'<GoToCartButton mode="shopSingle" />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <GoToCartButtonShopCompact />
          <p className={storyGalleryVariants.itemTitle}>
            {'<GoToCartButton mode="shopCompact" />'}
          </p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>
        features\cart\components\buttons\TrashButton
      </h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <TrashButtonDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<TrashButton />'}</p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>
        features\cart\components\buttons\GoToCartButton
      </h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <FloatingCartButtonVisualDesktop />
          <p className={storyGalleryVariants.itemTitle}>{'<FloatingCartButton />'}</p>
        </li>
        <li className={storyGalleryVariants.item}>
          <FloatingCartButtonVisualMobile />
          <p className={storyGalleryVariants.itemTitle}>{'<FloatingCartButton />'}</p>
        </li>
      </ul>
    </article>

    <article>
      <h3 className={storyGalleryVariants.subtitle}>features\search\components\SearchButton</h3>
      <ul className={storyGalleryVariants.list}>
        <li className={storyGalleryVariants.item}>
          <SearchButtonDefault />
          <p className={storyGalleryVariants.itemTitle}>{'<SearchButton />'} </p>
        </li>
      </ul>
    </article>
  </section>
);
