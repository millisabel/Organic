import ArrowIcon from '@/components/ui/ArrowIcon';
import { Button } from '@/components/ui/Button';
import clsx from 'clsx';

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
  const isHome = variant === 'home';

  const sectionClasses = clsx(
    'hero-section overflow-hidden bg-cover bg-center bg-no-repeat',
    bgColor,
    {
      'min-h-[calc(100vh-94px)] flex items-center': isHome,
      'py-[125px] text-center': !isHome,
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
            <Button className="mt-6">
              Explore Now <ArrowIcon />
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
