import Title from '@/components/ui/Typography/Title';
import EmptyCart from '@/features/cart/components/EmptyCart';

const CartPage = () => {
  return (
    <>
      <Title
        children="Shopping Cart"
        variant="sectionTitle"
        className="text-center my-10"
        level={1}
      />
      <EmptyCart />
    </>
  );
  // const dispatch = useAppDispatch();
  // const cartItems = useAppSelector((state) => state.cart.items);
  // const isEmpty = cartItems.length === 0;
  // const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  // const handleQuantityChange = (id: string | number, quantity: number) => {
  //   if (quantity < 1) return;
  //   dispatch(updateQuantity({ id, quantity }));
  // };
  // const handleRemove = (id: string | number) => {
  //   dispatch(removeItem(id));
  // };
  // return (
  // <Section>

  //   {isEmpty ? (
  //     <EmptyCart />
  //   ) : (
  //     <>
  //       <CartItemDesktop
  //         cartItems={cartItems}
  //         handleQuantityChange={handleQuantityChange}
  //         handleRemove={handleRemove}
  //       />
  //       <CartItemMobile
  //         cartItems={cartItems}
  //         handleQuantityChange={handleQuantityChange}
  //         handleRemove={handleRemove}
  //       />
  //       <CartSummary total={total} />
  //     </>
  //   )}
  // </Section>
  // );
};

export default CartPage;
