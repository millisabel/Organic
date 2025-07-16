import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

interface ISectionProps {
  id?: string;
  children: React.ReactNode;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  backgroundPosition?: string;
  paddingY?: string;
  className?: string;
  dataComponent?: string;
  backgroundSize?: string;
}

const Section: React.FC<ISectionProps> = ({
  id,
  children,
  className,
  backgroundColor,
  backgroundImageUrl,
  backgroundPosition = 'center center',
  backgroundSize = 'cover',
  paddingY = 'py-20',
  dataComponent = 'section',
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

  const sectionClasses = clsx(
    'transition-opacity duration-1000',
    paddingY ? paddingY : 'py-20',
    className,
    {
      'opacity-100': isImageLoaded || !backgroundImageUrl,
      'opacity-0': backgroundImageUrl && !isImageLoaded,
    },
  );

  return (
    <section id={id} className={sectionClasses} style={sectionStyle} data-component={dataComponent}>
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
