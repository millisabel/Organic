import Section from '@/components/layout/Section';
import ContentLayout from '@/components/patterns/ContentLayout';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import Button from '@/components/ui/Button';
import { Paragraph, Title } from '@/components/ui/Typography';
import { Link } from 'react-router-dom';
import type { NotFoundenSectionProps } from '.';

const NotFoundenSection = ({
  title,
  subtitle,
  backgroundImageUrl,
  text,
  ...props
}: NotFoundenSectionProps) => {
  return (
    <Section id="NotFoondenSection" backgroundImageUrl={backgroundImageUrl} {...props}>
      <ContentLayout
        variant="flexCol"
        align="center_lg_st"
        className="lg:ml-[60%] text-center lg:text-left"
      >
        <Title
          level={1}
          variant="default"
          className="text-green-100 font-black text-[160px] xl:text-[20vw]"
        >
          {title}
        </Title>
        <Title level={2} variant="sectionTitle" className="">
          {subtitle}
        </Title>
        {text ? <Paragraph className="mb-10 text-center lg:text-start"> {text} </Paragraph> : null}
        <Button asChild className="">
          <Link to="" className="flex flex-row items-center justify-center gap-4">
            Go to Homepage
            <ArrowIcon />
          </Link>
        </Button>
      </ContentLayout>
    </Section>
  );
};

export default NotFoundenSection;
