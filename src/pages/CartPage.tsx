import CartIcon from '@/components/icons/CartIcon';
import CloseIcon from '@/components/icons/CloseIcon';
import Section from '@/components/shared/Section';
import { Button } from '@/components/ui/Button';
import { removeItem, updateQuantity } from '@/store/cartSlice';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getImageUrl } from '@/utils/helpers';
import { Link } from 'react-router-dom';

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
        <div className="flex flex-col items-center justify-center py-20">
          <div className="mb-8 opacity-60">
            <CartIcon className="w-32 h-32 text-primary" />
          </div>
          <p className="text-xl text-neutral-500 mb-6">Your cart is empty.</p>
          <Button asChild>
            <Link to="/shop">Go to Shop</Link>
          </Button>
        </div>
      ) : (
        <>
          <div className="overflow-x-auto">
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
                  <tr key={item.id} className="bg-white rounded-xl shadow-sm">
                    <td className="p-2 flex items-center gap-4">
                      <Link
                        to={`/shop/${item.id}`}
                        className="flex items-center gap-4 group"
                        tabIndex={0}
                        aria-label={`Go to ${item.name} page`}
                      >
                        <img
                          src={getImageUrl('products', item.imageUrl)}
                          alt={item.name}
                          className="w-16 h-16 object-contain rounded-lg border group-hover:border-primary group-hover:shadow-md transition-all"
                        />
                        <span className="font-semibold text-primary underline-offset-2 group-hover:underline">
                          {item.name}
                        </span>
                      </Link>
                    </td>
                    <td className="p-2">${item.price.toFixed(2)}</td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon-lg"
                          aria-label="Decrease quantity"
                          disabled={item.quantity <= 1}
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        >
                          −
                        </Button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon-lg"
                          aria-label="Increase quantity"
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td className="p-2 font-bold">${(item.price * item.quantity).toFixed(2)}</td>
                    <td className="p-2">
                      <Button
                        variant="destructive"
                        size="icon-lg"
                        aria-label="Remove item"
                        onClick={() => handleRemove(item.id)}
                      >
                        <CloseIcon />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between mt-8 gap-4">
            <div className="text-xl font-bold">
              Total: <span className="text-primary">${total.toFixed(2)}</span>
            </div>
            <Button className="w-full md:w-auto" disabled>
              Checkout (demo)
            </Button>
          </div>
        </>
      )}
    </Section>
  );
};

export default CartPage;
