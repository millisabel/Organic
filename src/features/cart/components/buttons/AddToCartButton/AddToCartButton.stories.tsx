import AddToCartButton from './AddToCartButton';

export default {
  title: 'Features/Cart/Buttons/AddToCartButton',
  component: AddToCartButton,
};

export const Default = () => (
  <AddToCartButton isInCart={false} isLoading={false} isOutOfStock={false} onClick={() => {}} />
);
export const InCart = () => (
  <AddToCartButton isInCart={true} isLoading={false} isOutOfStock={false} onClick={() => {}} />
);
export const OutOfStock = () => (
  <AddToCartButton isInCart={false} isLoading={false} isOutOfStock={true} onClick={() => {}} />
);
export const Loading = () => (
  <AddToCartButton isInCart={false} isLoading={true} isOutOfStock={false} onClick={() => {}} />
);
