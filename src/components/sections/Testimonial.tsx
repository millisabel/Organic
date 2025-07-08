import Section from '../layout/sectionLayouts/Section';
import testimonialBg from '@/assets/images/backgrounds/testimonial_home.webp';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';

const Testimonial = () => {
  return (
    <Section backgroundImageUrl={testimonialBg} dataComponent="TestimonialSection">
      <SectionHeader title="What Our Customer Saying?" subtitle="Testimonial" />
      <div className="flex flex-col gap-4">slider</div>
      <div className="flex flex-col gap-4">other</div>
    </Section>
  );
};

export default Testimonial;
