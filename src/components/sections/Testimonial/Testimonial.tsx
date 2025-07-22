import Section from '@/components/layout/Section/Section';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import ReviewCard from '@/components/shared/Card/ReviewCard';
import type { ReviewCardData } from '@/components/shared/Card/ReviewCard/types';
import FastItem from '@/components/shared/ContentBlocks/FastItem/FastItem';
import type { FastItemData } from '@/components/shared/ContentBlocks/FastItem/types';
import Swiper from '@/components/ui/Swiper';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import type { TestimonialProps } from './types';

const Testimonial = ({
  id = 'testimonial',
  backgroundImageUrl,
  paddingY = 'py-[160px]',
  title,
  subtitle,
  reviews = [],
  facts = [],
  ...sectionProps
}: TestimonialProps) => {
  const isMobile = useIsBelowBreakpoint('md');

  return (
    <Section
      id={id}
      backgroundImageUrl={backgroundImageUrl}
      paddingY={paddingY}
      dataComponent="TestimonialSection"
      {...sectionProps}
    >
      <SectionHeader title={title} subtitle={subtitle} className="text-center mb-16" />

      {/* Reviews Slider */}
      <Swiper<ReviewCardData>
        items={reviews}
        renderItem={(item) => <ReviewCard data={item} />}
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="max-w-[800px] mx-auto mb-10 lg:mb-16 pb-20"
        ariaLabel="Testimonial slider"
      />

      {/* Facts Section */}
      {isMobile ? (
        <Swiper<FastItemData>
          items={facts}
          renderItem={(fact) => (
            <div className="flex justify-center">
              <FastItem value={fact.value} label={fact.label} />
            </div>
          )}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
          spaceBetween={20}
          slidesPerView={1}
          effect="fade"
          loop={facts.length > 1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          className="flex items-center justify-center mx-auto pb-10"
          ariaLabel="Facts slider"
        />
      ) : (
        <div className="flex gap-2 items-center justify-center max-w-7xl mx-auto">
          {facts.map((fact) => (
            <div key={fact.id} className="flex justify-center">
              <FastItem value={fact.value} label={fact.label} />
            </div>
          ))}
        </div>
      )}
    </Section>
  );
};

export default Testimonial;
