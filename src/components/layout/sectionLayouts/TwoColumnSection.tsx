import Section from '@/components/layout/sectionLayouts/Section';
import ContentBlock from '../contentLayouts/ContentBlock';

interface ITwoColumnSectionProps {
  title?: string;
  subtitle?: string;
  description?: string;
  image?: string;
  children?: React.ReactNode;
  button?: { text: string; onClick?: () => void; icon?: React.ReactNode };
  className?: string;
}

const TwoColumnSection: React.FC<ITwoColumnSectionProps> = ({
  title,
  subtitle,
  children,
  image,
  description,
  button,
  className = '',
}) => {
  return (
    <Section>
      <div className={`flex flex-col lg:flex-row items-center ${className}`}>
        <div className="w-1/2 lg:w-1/2 flex justify-center lg:justify-end lg:pr-12 mb-8 lg:mb-0">
          <img src={image} alt="Two Column Section" />
        </div>
        <div className="w-1/2">
          <ContentBlock title={title} subtitle={subtitle} description={description} button={button}>
            {children}
          </ContentBlock>
        </div>
      </div>
    </Section>
  );
};

export default TwoColumnSection;
