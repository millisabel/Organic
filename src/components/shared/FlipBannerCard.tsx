import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import React, { useState } from 'react';

interface FlipBannerCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  flipDirection?: 'left' | 'right';
  className?: string;
}

const FlipBannerCard: React.FC<FlipBannerCardProps> = ({
  front,
  back,
  className = '',
  flipDirection = 'right',
}) => {
  const [flipped, setFlipped] = useState(false);
  const isMobile = useIsBelowBreakpoint('md');

  const flipClass = flipped ? (flipDirection === 'left' ? 'rotate-y--180' : 'rotate-y-180') : '';

  const hoverClass = !isMobile
    ? flipDirection === 'left'
      ? 'group-hover:rotate-y--180'
      : 'group-hover:rotate-y-180'
    : '';

  return (
    <div
      className={`group perspective-1200 ${className}`}
      tabIndex={0}
      aria-label="Flip card"
      onClick={() => isMobile && setFlipped((f) => !f)}
      onMouseLeave={() => !isMobile && setFlipped(false)}
      onMouseEnter={() => !isMobile && setFlipped(true)}
      onBlur={() => setFlipped(false)}
      data-component="FlipBannerCard"
    >
      <div
        className={`absolute inset-0 w-full h-full transition-transform duration-500 preserve-3d ${flipClass} ${hoverClass}`}
      >
        {/* Front */}
        <div
          className={`absolute inset-0 w-full h-full transition-transform duration-500 preserve-3d`}
        >
          {front}
        </div>
        {/* Back */}
        <div
          className={`absolute inset-0 w-full h-full backface-hidden ${
            flipDirection === 'left' ? 'rotate-y--180' : 'rotate-y-180'
          }`}
        >
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipBannerCard;
