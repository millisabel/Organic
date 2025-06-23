import { cn } from '@/utils/helpers';
import React from 'react';

interface ISectionProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

const Section: React.FC<ISectionProps> = ({
  children,
  title,
  subtitle,
  align = 'left',
  className,
}) => {
  const headerClasses = cn('mb-10', {
    'text-center': align === 'center',
    'text-left': align === 'left',
  });

  return (
    <section className={cn('py-20', className)}>
      <div className="container mx-auto">
        {(title || subtitle) && (
          <div className={headerClasses}>
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
            {title && <h2 className="section-title">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
