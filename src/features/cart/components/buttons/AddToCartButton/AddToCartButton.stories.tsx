import AddToCartButton from './AddToCartButton';

export default {
  title: 'Components/Button/Extended/AddToCartButton',
  component: AddToCartButton,
  parameters: {
    docs: {
      description: {
        component: 'src/features/cart/components/buttons/AddToCartButton/AddToCartButton.tsx',
      },
    },
  },
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
