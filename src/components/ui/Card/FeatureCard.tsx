import React from 'react';
import clsx from 'clsx';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  iconPosition?: 'left' | 'top';
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  iconPosition = 'left',
  className,
}) => {
  const containerClass = clsx(
    'flex',
    iconPosition === 'top' ? 'flex-col items-center text-center' : 'flex-row items-start',
    className,
  );

  return (
    <div className={containerClass}>
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
