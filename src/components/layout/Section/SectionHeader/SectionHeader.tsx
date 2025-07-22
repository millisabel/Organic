import Title from '@/components/ui/Typography/Title';
import { cn } from '@/utils/helpers';
import React from 'react';
import type { SectionHeaderProps } from './types';
import { sectionHeaderVariants } from './variants';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  variant,
  titleLevel = 2,
  subtitleLevel = 3,
  titleVariant = 'sectionTitle',
  subtitleVariant = 'sectionSubTitle',
}) => {
  return (
    <div
      className={cn(sectionHeaderVariants({ variant }), className)}
      data-component="SectionHeader"
    >
      <Title variant={titleVariant} level={titleLevel} className="order-2">
        {title}
      </Title>
      <Title variant={subtitleVariant} level={subtitleLevel} className="order-1">
        {subtitle}
      </Title>
    </div>
  );
};

export default SectionHeader;
