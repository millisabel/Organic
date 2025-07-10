import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import NavigateButton from '../ui/Button/NavigateButton';
import clsx from 'clsx';

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
        : 'h-[50vh]',
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
      {button && <NavigateButton text={button.text} icon={button.icon} to="/shop" />}
    </Section>
  );
};

export default HeroSection;
