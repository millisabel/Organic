import TrashButton from '@/components/shared/Button/TrashButton';
import type { CartItem } from '@/features/cart/model';
import CartItemSubtotal from '../../components/items/CartItemSubtotal';
import CartProductInfo from '../../components/items/CartProductInfo';
import CartQuantityButtons from '../../components/items/CartQuantityButtons';

interface CartItemMobileProps {
  cartItems: CartItem[];
  handleQuantityChange: (id: string | number, quantity: number) => void;
  handleRemove: (id: string | number) => void;
}

const CartItemMobile = ({ cartItems, handleQuantityChange, handleRemove }: CartItemMobileProps) => {
  return (
    <div className="block md:hidden">
      {cartItems.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-6 mb-6 p-4 bg-white rounded-xl shadow-sm hover:bg-secondary/10 transition-all duration-300"
        >
          <div className="flex items-center gap-6 justify-between">
            <CartProductInfo item={item} />
            <TrashButton onClick={() => handleRemove(item.id)} />
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
