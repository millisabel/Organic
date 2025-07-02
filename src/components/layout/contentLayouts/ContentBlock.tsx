import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import NavigateButton from '@/components/ui/Button/NavigateButton';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';

interface ContentBlockProps {
  title?: string;
  subtitle?: string;
  description: string | string[];
  button?: { text: string; onClick?: () => void; icon?: React.ReactNode };
  children?: React.ReactNode;
  className?: string;
}

const stylesDescription = 'text-center lg:text-left mb-2 text-text-light';

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
    {Array.isArray(description) ? (
      description.map((text, idx) => (
        <p key={idx} className={`${stylesDescription} last:mb-0`}>
          {text}
        </p>
      ))
    ) : (
      <p className={stylesDescription}>{description}</p>
    )}
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
