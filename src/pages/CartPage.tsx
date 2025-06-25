import Section from '@/components/shared/Section';
import { removeItem, updateQuantity } from '@/store/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { CartItemDesktop, CartItemMobile } from '@/features/cart/components/CartItem';
import EmptyCart from '@/features/cart/components/CartItem/EmptyCart';
import CartSummary from '@/features/cart/components/CartItem/CartSummary';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const isEmpty = cartItems.length === 0;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleQuantityChange = (id: string | number, quantity: number) => {
    if (quantity < 1) return;
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleRemove = (id: string | number) => {
    dispatch(removeItem(id));
  };

  return (
    <Section title="Shopping Cart" align="center">
      {isEmpty ? (
        <EmptyCart />
      ) : (
        <>
          <CartItemDesktop
            cartItems={cartItems}
            handleQuantityChange={handleQuantityChange}
            handleRemove={handleRemove}
          />
          <CartItemMobile
            cartItems={cartItems}
            handleQuantityChange={handleQuantityChange}
            handleRemove={handleRemove}
          />
          <CartSummary total={total} />
        </>
      )}
    </Section>
  );
};

export default CartPage;
