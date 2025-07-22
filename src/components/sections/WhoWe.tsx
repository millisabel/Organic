import Section from '../layout/Section/Section';
import SectionHeader from '../layout/Section/SectionHeader';
import type { SectionProps } from '../layout/Section/types';
import Layout from '../patterns/ContentLayout';
import Article from '../shared/Post/Article/Article';
import type { ArticleContentProps } from '../shared/Post/Article/types';

interface WhoWeProps extends SectionProps {
  className?: string;
  title: string;
  subtitle: string;
  description?: ArticleContentProps[];
}

const WhoWe = ({ id, className, title, subtitle, description = [], ...props }: WhoWeProps) => {
  return (
    <Section id={id} className={className} {...props}>
      <Layout variant="gridColumn_2">
        <div className="hidden md:block md:w-1/2" />
        <div className="flex flex-col gap-4">
          <div className="relative lg:left-[-100px] bg-white p-8 rounded-xl lg:shadow-[-20px_20px_25px_-5px_rgb(0_0_0_/_0.1),_0_8px_10px_-6px_rgb(0_0_0_/_0.1)]">
            <SectionHeader title={title} subtitle={subtitle} className="text-left" />
            <Article content={description} />
          </div>
        </div>
      </Layout>
    </Section>
  );
};

export default WhoWe;
