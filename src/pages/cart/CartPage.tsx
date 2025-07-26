import Section from '@/components/layout/Section/Section';
import Title from '@/components/ui/Typography/Title';
import EmptyCart from '@/features/cart/components/EmptyCart';
import CartItemDesktop from '@/features/cart/components/items/CartItemDesktop';
import CartItemMobile from '@/features/cart/components/items/CartItemMobile';
import CartSummary from '@/features/cart/components/CartSummary';
import { useAppDispatch, useAppSelector, type RootState } from '@/store';
import { removeItem, updateQuantity } from '@/features/cart/model';

const CartPage = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
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
    <Section>
      <Title
        children="Shopping Cart"
        variant="sectionTitle"
        className="text-center my-10"
        level={1}
      />
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
