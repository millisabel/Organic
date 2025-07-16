import { StatusBadge } from '.';

export default {
  title: 'UI/Badge/StatusBadge',
  component: StatusBadge,
};

export const StatusBadgeDefault = () => <StatusBadge variant="default" />;
export const StatusBadgeNew = () => <StatusBadge variant="new" />;
export const StatusBadgeSale = () => <StatusBadge variant="sale" />;
export const StatusBadgeInCart = () => <StatusBadge variant="inCart" />;
export const StatusBadgeOutOfStock = () => <StatusBadge variant="outOfStock" />;
