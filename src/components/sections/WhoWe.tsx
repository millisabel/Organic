import Section from '../layout/Section/Section';
import SectionHeader from '../layout/Section/SectionHeader';

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
      backgroundSize={bgSize}
      backgroundPosition={bgPosition}
    >
      <div className="flex flex-col lg:flex-row items-stretch min-h-[400px]">
        <div className="hidden lg:block w-full lg:w-1/2" />
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="flex flex-col gap-4">
          {dataDescription.map((item, index) => (
            <div className="flex flex-col gap-2" key={index}>
              <h3 className="font-roboto text-2xl font-bold text-primary">{item.title}</h3>
              <p className="text-gray-500 text-base">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhoWe;
