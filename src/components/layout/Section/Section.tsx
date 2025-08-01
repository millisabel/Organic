import { useBackgroundImage } from '@/hooks/useBackgroundImage';
import { cn } from '@/utils/helpers';
import clsx from 'clsx';
import React, { forwardRef, useMemo } from 'react';
import type { SectionProps } from './types';

const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
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
    },
    ref,
  ) => {
    const { isLoaded, hasError } = useBackgroundImage(backgroundImageUrl);

    const sectionStyle = useMemo((): React.CSSProperties => {
      const style: React.CSSProperties = {};

      if (backgroundColor && backgroundColor !== 'bg-inherit') {
        if (!backgroundColor.startsWith('bg-')) {
          style.backgroundColor = backgroundColor;
        }
      }

      if (backgroundImageUrl && isLoaded && !hasError) {
        style.backgroundImage = `url(${backgroundImageUrl})`;
        style.backgroundSize = backgroundSize;
        style.backgroundPosition = backgroundPosition;
        style.backgroundRepeat = 'no-repeat';
      }

      return style;
    }, [
      backgroundColor,
      backgroundImageUrl,
      backgroundSize,
      backgroundPosition,
      isLoaded,
      hasError,
    ]);

    const sectionClasses = useMemo(() => {
      return clsx(
        'transition-opacity duration-1000',
        paddingY,
        backgroundColor && backgroundColor.startsWith('bg-') ? backgroundColor : null,
        {
          'opacity-100': !backgroundImageUrl || isLoaded || hasError,
          'opacity-0': backgroundImageUrl && !isLoaded && !hasError,
        },
      );
    }, [paddingY, backgroundColor, isLoaded, hasError, backgroundImageUrl]);

    return (
      <section
        ref={ref}
        className={cn(sectionClasses, className)}
        style={sectionStyle}
        data-component={dataComponent}
        {...props}
      >
        {container ? <div className="container mx-auto">{children}</div> : children}
      </section>
    );
  },
);

Section.displayName = 'Section';

export default Section;
