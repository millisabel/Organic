import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

export interface SectionProps {
  id?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  backgroundPosition?: string;
  paddingY?: string;
  className?: string;
  backgroundSize?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  backgroundColor,
  backgroundImageUrl,
  backgroundPosition = 'center center',
  backgroundSize = 'cover',
  paddingY = 'py-20',
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (!backgroundImageUrl) return;

    let isMounted = true;
    setIsImageLoaded(false);

    const img = new window.Image();
    img.src = backgroundImageUrl;
    img.onload = () => {
      if (isMounted) setIsImageLoaded(true);
    };

    return () => {
      isMounted = false;
    };
  }, [backgroundImageUrl]);

  const sectionStyle: React.CSSProperties = {};
  if (backgroundColor) sectionStyle.backgroundColor = backgroundColor;
  if (backgroundImageUrl) {
    sectionStyle.backgroundImage = `url(${backgroundImageUrl})`;
    sectionStyle.backgroundSize = backgroundSize;
    sectionStyle.backgroundPosition = backgroundPosition;
    sectionStyle.backgroundRepeat = 'no-repeat';
  }

  const sectionClasses = clsx('transition-opacity duration-1000', paddingY, className, {
    'opacity-100': isImageLoaded || !backgroundImageUrl,
    'opacity-0': backgroundImageUrl && !isImageLoaded,
  });

  return (
    <section className={sectionClasses} style={sectionStyle} data-component="Section">
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
