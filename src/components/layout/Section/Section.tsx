import { useBackgroundImage } from '@/hooks/useBackgroundImage';
import { cn } from '@/utils/helpers';
import clsx from 'clsx';
import React, { useMemo } from 'react';
import type { SectionProps } from './types';

const Section: React.FC<SectionProps> = ({
  children,
  backgroundColor = 'bg-inherit',
  backgroundImageUrl,
  backgroundPosition = 'center center',
  backgroundSize = 'cover',
  paddingY = 'py-20',
  dataComponent = 'Section',
  className,
  container = true,
  ...props
}) => {
  const { isLoaded } = useBackgroundImage(backgroundImageUrl);

  const sectionStyle = useMemo((): React.CSSProperties => {
    const style: React.CSSProperties = {};

    if (backgroundColor && backgroundColor !== 'bg-inherit') {
      if (!backgroundColor.startsWith('bg-')) {
        style.backgroundColor = backgroundColor;
      }
    }

    if (backgroundImageUrl) {
      style.backgroundImage = `url(${backgroundImageUrl})`;
      style.backgroundSize = backgroundSize;
      style.backgroundPosition = backgroundPosition;
      style.backgroundRepeat = 'no-repeat';
    }

    return style;
  }, [backgroundColor, backgroundImageUrl, backgroundSize, backgroundPosition]);

  const sectionClasses = useMemo(() => {
    return clsx(
      'transition-opacity duration-1000',
      paddingY,
      backgroundColor && backgroundColor.startsWith('bg-') ? backgroundColor : null,
      {
        'opacity-100': isLoaded || !backgroundImageUrl,
        'opacity-0': backgroundImageUrl && !isLoaded,
      },
    );
  }, [paddingY, backgroundColor, isLoaded, backgroundImageUrl]);

  return (
    <section
      className={cn(sectionClasses, className)}
      style={sectionStyle}
      data-component={dataComponent}
      {...props}
    >
      {container ? <div className="container mx-auto">{children}</div> : children}
    </section>
  );
};

export default Section;
