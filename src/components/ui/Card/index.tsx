import React from 'react';
import { twMerge } from 'tailwind-merge';

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<ICardProps> = ({ children, className }) => {
  const cardClasses = twMerge(
    'bg-white rounded-[30px] overflow-hidden transition-shadow duration-300 ease-in-out hover:shadow-card',
    className,
  );

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
