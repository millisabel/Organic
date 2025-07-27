import GoToShop from '@/components/shared/Button/GoToShop/GoToShop';
import Section from '../../layout/Section/Section';
import SectionHeader from '../../layout/Section/SectionHeader';
import type { HeroProps } from './types';
import { heroVariants } from './variants';

const HeroSection = ({ variant = 'home', title, subtitle, ...props }: HeroProps) => {
  return (
    <Section dataComponent="HeroSection" className={heroVariants({ variant })} {...props}>
      {(title || subtitle) && (
        <SectionHeader
          title={title}
          subtitle={subtitle}
          titleLevel={1}
          subtitleLevel={2}
          titleVariant="heroTitle"
          variant={variant}
        />
      )}
      {variant === 'home' && <GoToShop className="mx-auto md:mx-0">Explore Now</GoToShop>}
    </Section>
  );
};

export default HeroSection;
