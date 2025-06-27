import React from 'react';
import { twMerge } from 'tailwind-merge';

const cardBaseClasses = [
  'overflow-hidden', // Layout
  'bg-white', // Background
  'rounded-[30px]', // Border
  'transition-shadow duration-300 ease-in-out', // Effects
  'hover:shadow-card', // Hover
].join(' ');

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<ICardProps> = ({ children, className }) => {
  const cardClasses = twMerge(cardBaseClasses, className);

  return (
    <div className={cardClasses} data-component="Card">
      {children}
    </div>
  );
};

export default Card;
