import React from 'react';
import clsx from 'clsx';
import { useCurrentPage } from '@/hooks/useCurrentPage';

interface FeatureCardProps {
  src: string;
  title: string;
  description: string;
}

const baseStyles = {
  container: 'flex',
  icon: 'flex items-center justify-center w-[100px] h-[100px] p-[25px] rounded-[20px]',
  title: 'text-2xl text-primary font-roboto font-extrabold',
  description: 'font-opensans text-base text-text-light',
};

const columnClass = 'flex-col items-start text-center';
const rowClass = 'flex-row items-center gap-4';

const variantStyles = {
  home: {
    container: clsx(baseStyles.container, rowClass, ''),
    icon: clsx(baseStyles.icon, 'bg-white'),
    title: clsx(baseStyles.title, ''),
    description: clsx(baseStyles.description, ''),
  },
  about: {
    container: clsx(baseStyles.container, rowClass, ''),
    icon: clsx(baseStyles.icon, 'bg-transparent'),
    title: clsx(baseStyles.title, ''),
    description: clsx(baseStyles.description, ''),
  },
  default: {
    container: clsx(baseStyles.container, columnClass, ''),
    icon: clsx(baseStyles.icon, 'bg-gray-200'),
    title: clsx(baseStyles.title, ''),
    description: clsx(baseStyles.description, ''),
  },
};

const FeatureCard: React.FC<FeatureCardProps> = ({ src, title, description }) => {
  const pageVariant = useCurrentPage();
  const styles = variantStyles[pageVariant as keyof typeof variantStyles] || variantStyles.default;

  return (
    <div className={styles.container} data-component="FeatureCard">
      <div className={styles.icon}>
        <img src={src} alt={title} />
      </div>
      <div>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
