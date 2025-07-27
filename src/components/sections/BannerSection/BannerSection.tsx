import Section from '@/components/layout/Section/Section';
import ContentLayout from '@/components/patterns/ContentLayout';
import BannerCard from '@/components/shared/Card/BannerCard';
import type { BannerCardProps } from '@/components/shared/Card/BannerCard/types';
import type { SectionProps } from '@/components/layout/Section/types';

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
    imageSize: {
      width: 683,
      height: 367,
    },
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
    imageSize: {
      width: 683,
      height: 367,
    },
  },
];

const BannerSection = ({ ...props }: SectionProps) => {
  return (
    <Section paddingY="py-[10vw]" dataComponent="BannerSection" {...props}>
      <ContentLayout variant="gridCol_md_2">
        {banners.map((banner) => (
          <BannerCard key={banner.title} {...banner} />
        ))}
      </ContentLayout>
    </Section>
  );
};

export default BannerSection;
