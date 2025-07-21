import StatusBadge from '../StatusBadge';
import type { StatusBlockProps } from './types';

const StatusBlock = ({ product, isInCart, className }: StatusBlockProps) => {
  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      {product.isOutOfStock ? (
        <StatusBadge variant="status" text="Out of Stock" />
      ) : (
        <>
          {isInCart && <StatusBadge variant="status" state="inCart" text="In Cart" />}
          {product.isNew && <StatusBadge variant="status" state="new" text="New" />}
          {product.oldPrice && product.oldPrice > product.price && (
            <StatusBadge variant="status" state="sale" text="Sale" />
          )}
        </>
      )}
    </div>
  );
};

export default StatusBlock;
