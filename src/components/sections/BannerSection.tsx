import type { BannerCardProps } from '@/components/ui/Card/BannerCard';
import BannerCard from '@/components/ui/Card/BannerCard';
import Section from '../layout/sectionLayouts/Section';

import bannerRight from '@/assets/images/banner/banner_1.webp';
import bannerLeft from '@/assets/images/banner/banner_2.webp';

const banners: BannerCardProps[] = [
  {
    imageUrl: bannerLeft,
    accent: 'Natural!!',
    title: 'Get Garden Fresh Fruits',
    flipDirection: 'left',
    bgBackColor: 'bg-[#f1eff0]',
    backFeatures: [
      'Always fresh and juicy',
      '100% organic',
      'No chemicals or pesticides',
      'Packed with vitamins',
      'Fast delivery',
    ],
    category: 'Fruits',
  },
  {
    imageUrl: bannerRight,
    accent: 'Offer!!',
    title: 'Get 10% off on Vegetables',
    flipDirection: 'right',
    bgBackColor: 'bg-[#f1eff0]',
    backFeatures: [
      'Locally sourced',
      'Handpicked quality',
      'Rich in nutrients',
      'Eco-friendly farming',
      'Special weekly offers',
    ],
    category: 'Vegetable',
  },
];

const BannerSection = () => {
  return (
    <Section paddingY="py-[10vw]" dataComponent="BannerSection">
      <div className="flex flex-col gap-6 md:flex-row md:gap-8">
        {banners.map((banner) => (
          <BannerCard key={banner.title} {...banner} />
        ))}
      </div>
    </Section>
  );
};

export default BannerSection;
