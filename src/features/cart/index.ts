// Model exports
export * from './model';

// Hooks exports
export { useCartActions } from './hooks/useCartActions';
export { useCartTotal } from './hooks/useCartTotal';
export { useFloatingCartButton } from './hooks/useFloatingCartButton';

// Components exports
export { default as AddToCartButton } from './components/buttons/AddToCartButton';
export { default as CartButton } from './components/buttons/CartButton';
export { default as FloatingCartButton } from './components/buttons/FloatingCartButton';
export { default as GoToCartButton } from './components/buttons/GoToCartButton';
export { default as TrashButton } from './components/buttons/TrashButton';

export { default as CartCountBadge } from './components/items/CartCountBadge';
export { default as CartItemDesktop } from './components/items/CartItemDesktop';
export { default as CartItemMobile } from './components/items/CartItemMobile';
export { default as CartItemSubtotal } from './components/items/CartItemSubtotal';
export { default as CartProductInfo } from './components/items/CartProductInfo';
export { default as CartQuantityButtons } from './components/items/CartQuantityButtons';

export { default as CartSummary } from './components/CartSummary';
export { default as EmptyCart } from './components/EmptyCart';

// Types exports
export type { CartItem } from './components/types';
