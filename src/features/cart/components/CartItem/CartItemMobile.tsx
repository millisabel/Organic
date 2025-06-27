import type { CartItem } from '@/components/ui/Card/cart';
import CartItemSubtotal from './CartItemSubtotal';
import CartProductInfo from './CartProductInfo';
import CartQuantityButtons from './CartQuantityButtons';
import RemoveButton from './RemoveButton';

interface CartItemMobileProps {
  cartItems: CartItem[];
  handleQuantityChange: (id: string | number, quantity: number) => void;
  handleRemove: (id: string | number) => void;
}

const CartItemMobile = ({ cartItems, handleQuantityChange, handleRemove }: CartItemMobileProps) => {
  return (
    <div className="block md:hidden">
      {cartItems.map((item) => (
        <div key={item.id} className="flex flex-col gap-2 mb-4 p-4 bg-white rounded-xl shadow-sm">
          <div className="flex items-center gap-4 justify-between">
            <CartProductInfo item={item} />
            <RemoveButton onRemove={() => handleRemove(item.id)} />
          </div>
          <div className="flex items-center justify-between">
            <CartQuantityButtons
              quantity={item.quantity}
              onDecrease={() => handleQuantityChange(item.id, item.quantity - 1)}
              onIncrease={() => handleQuantityChange(item.id, item.quantity + 1)}
            />
            <CartItemSubtotal price={item.price} quantity={item.quantity} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartItemMobile;
