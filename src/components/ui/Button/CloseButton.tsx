import CloseIcon from '@/components/ui/Icon/CloseIcon';
import { cn } from '@/utils/helpers';
import { type FC } from 'react';

interface CloseButtonProps {
  onClick: () => void;
  className?: string;
  ariaLabel?: string;
}

const CloseButton: FC<CloseButtonProps> = ({ onClick, className = '', ariaLabel = 'Close' }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        `absolute top-4 right-4 text-primary hover:text-error hover:scale-110 focus:text-error focus:outline-none focus:ring-1 focus:ring-error rounded-full transition-all`,
        className,
      )}
      aria-label={ariaLabel}
    >
      <CloseIcon />
    </button>
  );
};

export default CloseButton;
