import Section from '../layout/sectionLayouts/Section';
import testimonialBg from '@/assets/images/backgrounds/testimonial_home.webp';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper/modules';
import ReviewCard from '../ui/Card/ReviewCard';
import { getImageUrl } from '@/utils/helpers';
import FastCard from '../ui/Card/FastCard';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';

const facts = [
  { id: 1, value: '100%', label: 'Organic' },
  { id: 2, value: '285', label: 'Active Product' },
  { id: 3, value: '350+', label: 'Organic Orchads' },
  { id: 4, value: '25+', label: 'Years of Farming' },
];

const content = [
  {
    id: 1,
    name: 'Sara Taylor',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    image: 'Sara_Taylor.webp',
    job: 'Consumer',
    rating: 5,
  },
  {
    id: 2,
    name: 'Jane Doe',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    image: 'Jane_Doe.webp',
    job: 'SEO Expert',
    rating: 4,
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    image: 'Sarah_Johnson.webp',
    job: 'Marketing Manager',
    rating: 2,
  },
  {
    id: 4,
    name: 'Michael Brown',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    image: 'Michael_Brown.webp',
    job: 'Product Manager',
    rating: 3,
  },
  {
    id: 5,
    name: 'Emily Davis',
    text: 'Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.',
    image: 'Emily_Davis.webp',
    job: 'Software Engineer',
    rating: 1,
  },
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
        {content.map((item) => (
          <SwiperSlide key={item.id}>
            <ReviewCard
              name={item.name}
              job={item.job}
              text={item.text}
              rating={item.rating}
              image={getImageUrl('customers', item.image)}
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
                <FastCard value={fact.value} label={fact.label} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto">
            {facts.map((fact) => (
              <div key={fact.id} className="flex justify-center">
                <FastCard value={fact.value} label={fact.label} />
              </div>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
};

export default Testimonial;
