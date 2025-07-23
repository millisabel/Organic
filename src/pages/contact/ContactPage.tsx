import HeroSection from '@/components/sections/HeroSection';

import contactImage from '@/assets/images/backgrounds/hero_contact.webp';
import ContactSection from '@/components/sections/ContactSection';

const ContactPage = () => {
  return (
    <>
      <HeroSection variant="banner" title="Contact Us" backgroundImageUrl={contactImage} />;
      <ContactSection
        title="We'd love to talk about how we can work together."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </>
  );
};

export default ContactPage;
