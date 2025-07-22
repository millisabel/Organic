import { Link } from 'react-router-dom';
import Section from '../../layout/Section/Section';
import SectionHeader from '../../layout/Section/SectionHeader';
import Button from '@/components/ui/Button/Button';
import ArrowIcon from '../../shared/Icon/ArrowIcon';
import type { HeroProps } from './types';
import { heroVariants } from './variants';

const HeroSection = ({ variant = 'home', title, subtitle, ...props }: HeroProps) => {
  return (
    <Section dataComponent="HeroSection" className={heroVariants({ variant })} {...props}>
      <SectionHeader
        title={title}
        subtitle={subtitle}
        titleLevel={1}
        subtitleLevel={2}
        titleVariant="heroTitle"
        variant={variant}
      />
      {variant === 'home' && (
        <Button asChild className="mx-auto md:mx-0">
          <Link to="/shop">
            Explore Now
            <ArrowIcon variant="arrow" size="md" />
          </Link>
        </Button>
      )}
    </Section>
  );
};

export default HeroSection;
