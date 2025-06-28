import { Button } from '@/components/ui/Button';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import { Link } from 'react-router-dom';
import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';

interface HeroProps {
  variant: 'home' | 'banner';
  title: string;
  subtitle?: string;
  bgImage: string;
  bgColor?: string;
  bgPosition?: string;
}

const HeroSection = ({
  variant,
  title,
  subtitle,
  bgImage = 'none',
  bgColor = 'bg-inherit',
  bgPosition = 'center',
}: HeroProps) => {
  const isHome = variant === 'home';

  const sectionTitleAlign = isHome ? 'text-left' : 'text-center';
  const sectionTitleWidth = isHome ? 'max-w-xs' : 'max-w-full';
  const sectionTitleHeight = isHome ? 'min-h-screen' : 'auto';
  const sectionPaddingY = !isHome ? 'py-[185px]' : 'pt-20';

  const sectionButton = isHome ? (
    <Button asChild className="mt-6">
      <Link to="/shop">
        Explore Now <ArrowIcon variant="arrow" size="md" />
      </Link>
    </Button>
  ) : null;

  return (
    <Section
      backgroundImageUrl={bgImage}
      backgroundColor={bgColor}
      backgroundPosition={bgPosition}
      paddingY={sectionPaddingY}
      className={`flex items-center ${sectionPaddingY} ${sectionTitleHeight}`}
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
        as="h1"
        className={` ${sectionTitleWidth} ${sectionTitleAlign}`}
        titleAlignDesktop={sectionTitleAlign}
      />
      {sectionButton}
    </Section>
  );
};

export default HeroSection;
