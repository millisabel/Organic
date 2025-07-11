export interface CardProps {
  variant?: 'default' | 'product' | 'team';
  children?: React.ReactNode;
  tabIndex?: number;
  ariaLabel?: string;
  className?: string;
  imgClassName?: string;
  contentClassName?: string;
  imgProps?: {
    name: string;
    alt?: string;
    folder: string;
    loading?: 'lazy' | 'eager';
  };
}
