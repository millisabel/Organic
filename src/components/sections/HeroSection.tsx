import { Button } from '@/components/ui/Button';
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';

interface HeroProps {
  variant: 'home' | 'banner' | 'single';
  title?: string;
  subtitle?: string;
  bgImage: string;
  bgColor?: string;
  bgPosition?: string;
  button?: { text: string; onClick?: () => void; icon?: React.ReactNode };
}

const HeroSection = ({
  variant,
  title,
  subtitle,
  bgImage = 'none',
  bgColor = 'bg-inherit',
  bgPosition = 'center',
  button,
}: HeroProps) => {
  const sectionTitleAlign = variant === 'home' ? 'text-left' : 'text-center';

  const sectionClasses = clsx(
    'flex items-center',
    variant === 'home'
      ? 'min-h-screen pt-20'
      : variant === 'banner'
        ? 'h-auto py-[185px]'
        : 'h-[30vh] md:h-[50vh]',
  );

  const sectionTitleClasses = clsx(
    'text-left',
    variant === 'home'
      ? 'text-left max-w-xs'
      : variant === 'banner'
        ? 'max-w-full text-center'
        : '',
  );

  return (
    <Section
      backgroundImageUrl={bgImage}
      backgroundColor={bgColor}
      backgroundPosition={bgPosition}
      className={sectionClasses}
      dataComponent="HeroSection"
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
        as="h1"
        className={sectionTitleClasses}
        titleAlignDesktop={sectionTitleAlign}
      />
      {button && (
        <Button asChild>
          <Link to="/shop">
            {button.text} {button.icon && <span className="ml-2">{button.icon}</span>}
          </Link>
        </Button>
      )}
    </Section>
  );
};

export default HeroSection;
