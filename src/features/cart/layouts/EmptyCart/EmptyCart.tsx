import ContentLayout from '@/components/patterns/ContentLayout';
import CartIcon from '@/components/shared/Icon/CartIcon';
import GoToShop from '@/components/shared/Button/GoToShop';

const EmptyCart = () => (
  <ContentLayout variant="flexCol" align="center" className="py-20">
    <CartIcon className="w-32 h-32 text-primary opacity-60 mb-8" />
    <p className="text-xl text-neutral-500 mb-6">Your cart is empty.</p>
    <GoToShop children="Go to Shop" />
  </ContentLayout>
);

export default EmptyCart;
