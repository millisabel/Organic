import React from 'react';
import clsx from 'clsx';

interface FeatureCardProps {
  src: string;
  title: string;
  description: string;
  iconPosition?: 'left' | 'top';
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  src,
  title,
  description,
  iconPosition = 'left',
  className,
}) => {
  const iconLeftClass = 'flex-row items-start gap-4';
  const iconTopClass = 'flex-col items-center text-center';
  const iconClass =
    'flex items-center justify-center bg-white w-[100px] h-[100px] p-[25px] rounded-[20px]';

  const containerClass = clsx(
    'flex',
    iconPosition === 'top' ? iconTopClass : iconLeftClass,
    className,
  );

  return (
    <div className={containerClass} data-component="FeatureCard">
      <div className={iconClass}>
        <img src={src} alt={title} />
      </div>
      <div>
        <h3 className="text-2xl text-primary font-roboto font-extrabold">{title}</h3>
        <p className="font-opensans text-base text-text-light">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
