import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

interface ISectionProps {
  children: React.ReactNode;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  backgroundPosition?: string;
  paddingY?: string;
  className?: string;
}

const Section: React.FC<ISectionProps> = ({
  children,
  className,
  backgroundColor,
  backgroundImageUrl,
  paddingY = 'py-20',
  backgroundPosition = 'center',
}) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    if (!backgroundImageUrl) return;
    setIsImageLoaded(false);
    const img = new window.Image();
    img.src = backgroundImageUrl;
    img.onload = () => setIsImageLoaded(true);
  }, [backgroundImageUrl]);

  const sectionStyle: React.CSSProperties = {};
  if (backgroundColor) sectionStyle.backgroundColor = backgroundColor;
  if (backgroundImageUrl) {
    sectionStyle.backgroundImage = `url(${backgroundImageUrl})`;
    sectionStyle.backgroundSize = 'cover';
    sectionStyle.backgroundRepeat = 'no-repeat';
    sectionStyle.backgroundPosition = backgroundPosition;
  }

  const sectionClasses = clsx(
    'overflow-hidden transition-opacity duration-1000',
    paddingY ? paddingY : 'py-20',
    className,
    {
      'opacity-100': isImageLoaded || !backgroundImageUrl,
      'opacity-0': backgroundImageUrl && !isImageLoaded,
    },
  );

  return (
    <section className={sectionClasses} style={sectionStyle} data-component="section">
      <div className="container mx-auto">{children}</div>
    </section>
  );
};

export default Section;
