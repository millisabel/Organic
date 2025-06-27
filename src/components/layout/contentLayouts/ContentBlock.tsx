import SectionHeader from '@/components/shared/SectionHeader';
import { Button } from '@/components/ui/Button';

interface ContentBlockProps {
  title?: string;
  subtitle?: string;
  description?: string;
  button?: { text: string; onClick?: () => void };
  children?: React.ReactNode; // для вложенного контента
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
  <div className={`flex flex-col gap-4 ${className}`}>
    <SectionHeader title={title} subtitle={subtitle} titleAlignDesktop="text-left" />
    {description && <p className="text-base text-gray-600 mb-6">{description}</p>}
    {children}
    {button && (
      <Button variant="default" onClick={button.onClick} text={button.text} showIcon={true} />
    )}
  </div>
);

export default ContentBlock;
