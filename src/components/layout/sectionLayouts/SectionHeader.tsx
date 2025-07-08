import React from 'react';

interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  as?: keyof React.JSX.IntrinsicElements; // 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  titleColor?: string;
  marginBottom?: string;
  className?: string;
  titleAlignDesktop?: 'text-center' | 'text-left';
  titleAlignMobile?: 'text-center' | 'text-left';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  as = 'h2',
  titleColor = 'text-primary',
  marginBottom = 'mb-10',
  titleAlignDesktop = 'text-center',
  titleAlignMobile = 'text-center',
  className = '',
}) => {
  const headerTitleClasses = `font-roboto ${as === 'h1' ? 'text-h1' : 'text-section-title'} ${titleColor}`;
  const headerSubtitleClasses = 'font-yellowtail italic text-section-subtitle text-secondary';
  const TitleTag = React.createElement(as, { className: headerTitleClasses }, title || '');

  return (
    <div
      className={`${marginBottom}  ${className} ${titleAlignMobile}  lg:${titleAlignDesktop} mx-auto lg:mx-0`}
      data-component="section-header"
    >
      {subtitle && <p className={headerSubtitleClasses}>{subtitle}</p>}
      {title && TitleTag}
    </div>
  );
};

export default SectionHeader;
