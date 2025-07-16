import AddToCartButton from './AddToCartButton';

export default {
  title: 'Button/Features/Cart/Buttons/AddToCartButton',
  component: AddToCartButton,
};

export const AddToCartButtonDefault = () => (
  <AddToCartButton isInCart={false} isLoading={false} isOutOfStock={false} onClick={() => {}} />
);
export const AddToCartButtonInCart = () => (
  <AddToCartButton isInCart={true} isLoading={false} isOutOfStock={false} onClick={() => {}} />
);
export const AddToCartButtonOutOfStock = () => (
  <AddToCartButton isInCart={false} isLoading={false} isOutOfStock={true} onClick={() => {}} />
);
export const AddToCartButtonLoading = () => (
  <AddToCartButton isInCart={false} isLoading={true} isOutOfStock={false} onClick={() => {}} />
);
