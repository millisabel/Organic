import TrashButton from '@/components/shared/Button/TrashButton';
import CartItemSubtotal from '../../components/items/CartItemSubtotal';
import CartProductInfo from '../../components/items/CartProductInfo';
import CartQuantityButtons from '../../components/items/CartQuantityButtons';
import type { CartItemDesktopProps } from './types';

const CartItemDesktop = ({
  cartItems,
  handleQuantityChange,
  handleRemove,
}: CartItemDesktopProps) => {
  return (
    <div className="overflow-x-auto hidden md:block">
      <table className="min-w-full border-separate border-spacing-y-2">
        <thead>
          <tr className="text-left text-neutral-500 text-sm">
            <th className="p-2">Product</th>
            <th className="p-2">Price</th>
            <th className="p-2">Quantity</th>
            <th className="p-2">Subtotal</th>
            <th className="p-2"></th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:bg-secondary/10 transition-all duration-300"
            >
              <td className="p-2 flex items-center gap-4">
                <CartProductInfo item={item} />
              </td>
              <td className="p-2">${item.price.toFixed(2)}</td>
              <td className="p-2">
                <CartQuantityButtons
                  quantity={item.quantity}
                  onDecrease={() => handleQuantityChange(item.id, item.quantity - 1)}
                  onIncrease={() => handleQuantityChange(item.id, item.quantity + 1)}
                />
              </td>
              <td className="p-2 font-bold">
                <CartItemSubtotal price={item.price} quantity={item.quantity} />
              </td>
              <td className="p-2">
                <TrashButton onClick={() => handleRemove(item.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartItemDesktop;
