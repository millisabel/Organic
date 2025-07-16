import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from '@/components/ui/Button';
import { Link } from 'react-router-dom';

interface ContentBlockProps {
  title?: string;
  subtitle?: string;
  description?: string | string[];
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
    {description &&
      (Array.isArray(description) ? (
        description.map((text, idx) => (
          <p key={idx} className={`${stylesDescription} last:mb-0`}>
            {text}
          </p>
        ))
      ) : (
        <p className={stylesDescription}>{description}</p>
      ))}
    {children}
    {button && (
      <Button asChild>
        <Link to="/shop">
          Explore Now <ArrowIcon variant="arrow" size="md" className="ml-2" />
        </Link>
      </Button>
    )}
  </div>
);

export default ContentBlock;
