import React from 'react';

interface StatusBadgeProps {
  type: 'new' | 'outOfStock' | 'sale';
}

const badgeStyles = {
  outOfStock: 'bg-gray-400 text-white',
  sale: 'bg-red-500 text-white',
  new: 'bg-green-500 text-white',
};

const badgeText = {
  outOfStock: 'Out of Stock',
  sale: 'Sale',
  new: 'New',
};

const StatusBadge: React.FC<StatusBadgeProps> = ({ type }) => (
  <span
    className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase shadow ${badgeStyles[type]}`}
    aria-label={badgeText[type]}
  >
    {badgeText[type]}
  </span>
);

export default StatusBadge;
