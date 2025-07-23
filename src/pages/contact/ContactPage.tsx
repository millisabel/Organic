import HeroSection from '@/components/sections/HeroSection';

import contactImage from '@/assets/images/backgrounds/hero_contact.webp';
import ContactSection from '@/components/sections/ContactSection';
import LocationsSection from '@/components/sections/LocationsSection';

import locationsImage from '@/assets/images/backgrounds/locations_contact.webp';

const ContactPage = () => {
  return (
    <>
      <HeroSection variant="banner" title="Contact Us" backgroundImageUrl={contactImage} />;
      <ContactSection
        title="We'd love to talk about how we can work together."
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <LocationsSection
        title="Our Farms"
        subtitle="Location"
        backgroundImageUrl={locationsImage}
        description="Established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using."
      />
    </>
  );
};

export default ContactPage;
