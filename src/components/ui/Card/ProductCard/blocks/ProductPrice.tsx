import React from 'react';

interface ProductPriceProps {
  price: number;
  oldPrice?: number;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ price, oldPrice }) => (
  <div className="flex items-center gap-2">
    {oldPrice && (
      <p className="text-neutral-400 line-through font-semibold text-[15px] font-sans">
        ${oldPrice.toFixed(2)}
      </p>
    )}
    <p className="text-primary font-bold text-lg font-sans">${price.toFixed(2)}</p>
  </div>
);

export default ProductPrice;
