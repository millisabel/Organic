import { Button } from '@/components/ui/Button';
import ArrowIcon from '@components/icons/ArrowIcon';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  variant: 'home' | 'banner';
  title: string;
  subtitle?: string;
  backgroundImage: string;
  bgColor?: string;
}

const Hero = ({
  variant,
  title,
  subtitle,
  backgroundImage,
  bgColor = 'bg-background',
}: HeroProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const isHome = variant === 'home';

  useEffect(() => {
    setIsImageLoaded(false);
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, [backgroundImage]);

  const sectionClasses = clsx(
    'hero-section overflow-hidden bg-cover bg-center bg-no-repeat transition-opacity duration-1000',
    bgColor,
    {
      'min-h-[calc(100vh-94px)] flex items-center': isHome,
      'py-[185px] text-center': !isHome,
      'opacity-100': isImageLoaded,
      'opacity-0': !isImageLoaded,
    },
  );

  const sectionStyle = {
    '--bg-image': `url(${backgroundImage})`,
  } as React.CSSProperties;

  return (
    <section className={sectionClasses} style={sectionStyle}>
      <div className="container mx-auto px-4">
        {isHome ? (
          <div className="max-w-xl text-left">
            {subtitle && <p className="section-subtitle mb-2">{subtitle}</p>}
            <h1
              className={clsx('h1', {
                'max-w-lg': isHome,
              })}
            >
              {title}
            </h1>
            <Button asChild className="mt-6">
              <Link to="/shop">
                Explore Now <ArrowIcon />
              </Link>
            </Button>
          </div>
        ) : (
          <>
            {subtitle && <p className="section-subtitle mb-2">{subtitle}</p>}
            <h1 className="h1">{title}</h1>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;
