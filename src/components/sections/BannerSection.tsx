import Section from '../layout/Section/Section';
import type { SectionProps } from '../layout/Section/types';
import ContentLayout from '../patterns/ContentLayout';
import BannerCard from '../shared/Card/BannerCard';
import type { BannerCardProps } from '../shared/Card/BannerCard/types';

const banners: BannerCardProps[] = [
  {
    imageUrl: 'banner_1.webp',
    title: 'Get Garden Fresh Fruits',
    subtitle: 'Natural!!',
    flipDirection: 'left',
    backFeatures: [
      'Always fresh and juicy',
      '100% organic',
      'No chemicals or pesticides',
      'Packed with vitamins',
      'Fast delivery',
    ],
    titleColor: 'text-primary',
  },
  {
    imageUrl: 'banner_2.webp',
    subtitle: 'Offer!!',
    title: 'Get 10% off on Vegetables',
    flipDirection: 'right',
    backFeatures: [
      'Locally sourced',
      'Handpicked quality',
      'Rich in nutrients',
      'Eco-friendly farming',
      'Special weekly offers',
    ],
  },
];

const BannerSection = ({ ...props }: SectionProps) => {
  return (
    <Section paddingY="py-[10vw]" dataComponent="BannerSection" {...props}>
      <ContentLayout variant="twoColumn">
        {banners.map((banner) => (
          <BannerCard key={banner.title} {...banner} />
        ))}
      </ContentLayout>
    </Section>
  );
};

export default BannerSection;
