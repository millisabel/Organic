import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import NavigateButton from '../ui/Button/NavigateButton';

interface HeroProps {
  variant: 'home' | 'banner';
  title: string;
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
  const isHome = variant === 'home';

  const sectionTitleAlign = isHome ? 'text-left' : 'text-center';
  const sectionTitleWidth = isHome ? 'max-w-xs' : 'max-w-full';
  const sectionTitleHeight = isHome ? 'min-h-screen' : 'auto';
  const sectionPaddingY = !isHome ? 'py-[185px]' : 'pt-20';

  return (
    <Section
      backgroundImageUrl={bgImage}
      backgroundColor={bgColor}
      backgroundPosition={bgPosition}
      paddingY={sectionPaddingY}
      className={`flex items-center ${sectionPaddingY} ${sectionTitleHeight}`}
      data-component="hero-section"
    >
      <SectionHeader
        title={title}
        subtitle={subtitle}
        as="h1"
        className={` ${sectionTitleWidth} ${sectionTitleAlign}`}
        titleAlignDesktop={sectionTitleAlign}
      />
      {button && <NavigateButton text={button.text} icon={button.icon} to="/shop" />}
    </Section>
  );
};

export default HeroSection;
