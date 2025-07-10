import ContentBlock from '../layout/contentLayouts/ContentBlock';
import Section from '../layout/sectionLayouts/Section';

interface WhoWeProps {
  className?: string;
  bgImage: string;
  title: string;
  subtitle: string;
  bgSize?: string;
  bgPosition?: string;
}

const dataDescription = [
  {
    title: 'Start with Our Company First',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    title: 'Learn How to Grow Yourself',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
  {
    title: 'Farming Strategies of Today',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.',
  },
];

const WhoWe = ({ className, bgImage, title, subtitle, bgSize, bgPosition }: WhoWeProps) => {
  return (
    <Section
      className={className}
      backgroundImageUrl={bgImage}
      dataComponent="AboutSection"
      backgroundSize={bgSize}
      backgroundPosition={bgPosition}
    >
      <div className="flex flex-col lg:flex-row items-stretch min-h-[400px]">
        <div className="hidden lg:block w-full lg:w-1/2" />
        <ContentBlock
          title={title}
          subtitle={subtitle}
          className="
            relative
            z-10
            flex flex-col
            justify-center
            w-full
            lg:w-1/2
            rounded-3xl
            shadow-md
            lg:shadow-left
            bg-white
            p-4
            lg:p-12
            -ml-0
            lg:-ml-16
          "
        >
          <div className="flex flex-col gap-4">
            {dataDescription.map((item, index) => (
              <div className="flex flex-col gap-2" key={index}>
                <h3 className="font-roboto text-2xl font-bold text-primary">{item.title}</h3>
                <p className="text-gray-500 text-base">{item.description}</p>
              </div>
            ))}
          </div>
        </ContentBlock>
      </div>
    </Section>
  );
};

export default WhoWe;
