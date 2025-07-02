import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import NavigateButton from '@/components/ui/Button/NavigateButton';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';

interface ContentBlockProps {
  title?: string;
  subtitle?: string;
  description?: string;
  button?: { text: string; onClick?: () => void; icon?: React.ReactNode };
  children?: React.ReactNode;
  className?: string;
}

const ContentBlock: React.FC<ContentBlockProps> = ({
  title,
  subtitle,
  description,
  button,
  children,
  className = '',
}) => (
  <div className={`flex flex-col gap-4 ${className}`} data-component="ContentBlock">
    <SectionHeader title={title} subtitle={subtitle} titleAlignDesktop="text-left" />
    {description && <p className="text-base text-text-light mb-6">{description}</p>}
    {children}
    {button && (
      <NavigateButton
        text="Explore Now"
        icon={<ArrowIcon variant="arrow" size="md" />}
        to="/shop"
      />
    )}
  </div>
);

export default ContentBlock;
