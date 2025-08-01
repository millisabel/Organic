import type { CartItemSubtotalProps } from '.';

const CartItemSubtotal = ({ price, quantity }: CartItemSubtotalProps) => (
  <div className="font-bold">${(price * quantity).toFixed(2)}</div>
);

export default CartItemSubtotal;
