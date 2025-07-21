import testimonialBg from '@/assets/images/backgrounds/testimonial_home.webp';
import reviews from '@/data/reviews.json';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import { A11y, Autoplay, EffectFade, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import ReviewCard from '../shared/Card/ReviewCard';
import FastItem from '../shared/ContentBlocks/FastItem/FastItem';

const facts = [
  { id: 1, value: '100%', label: 'Organic' },
  { id: 2, value: '285', label: 'Active Product' },
  { id: 3, value: '350+', label: 'Organic Orchads' },
  { id: 4, value: '25+', label: 'Years of Farming' },
];

const Testimonial = () => {
  const isMobile = useIsBelowBreakpoint('lg');

  return (
    <Section
      backgroundImageUrl={testimonialBg}
      dataComponent="TestimonialSection"
      paddingY="py-[165px]"
    >
      <SectionHeader title="What Our Customer Saying?" subtitle="Testimonial" className="mb-16" />
      {/* slider */}
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        navigation
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        className="max-w-[1000px] mb-10 lg:mb-16 pb-10"
        aria-label="Testimonial slider"
      >
        {reviews.map((item) => (
          <SwiperSlide key={item.id}>
            <ReviewCard
              name={item.name}
              job={item.job}
              text={item.text}
              rating={item.rating}
              image={item.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* facts */}

      <div className="flex items-center justify-center mx-auto w-container">
        {isMobile ? (
          <Swiper
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
            aria-label="Facts slider"
          >
            {facts.map((fact) => (
              <SwiperSlide key={fact.id} className="flex justify-center">
                <FastItem value={fact.value} label={fact.label} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
            {facts.map((fact) => (
              <div key={fact.id} className="flex justify-center">
                <FastItem value={fact.value} label={fact.label} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Testimonial;
