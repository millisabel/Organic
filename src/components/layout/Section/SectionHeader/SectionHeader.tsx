import Title from '@/components/ui/Typography/Title';
import { cn } from '@/utils/helpers';
import React from 'react';
import type { SectionHeaderProps } from './types';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  className,
  slots = {},
}) => {
  const titleContent =
    slots.title ||
    (title && (
      <Title variant="sectionTitle" level={2} className="order-2">
        {title}
      </Title>
    ));

  const subtitleContent =
    slots.subtitle ||
    (subtitle && (
      <Title variant="sectionSubTitle" level={3} className="order-1">
        {subtitle}
      </Title>
    ));

  return (
    <div
      className={cn('flex flex-col gap-4 mb-10 text-center', className)}
      data-component="SectionHeader"
    >
      {titleContent}
      {subtitleContent}
    </div>
  );
};

export default SectionHeader;
