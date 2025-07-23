import ContactFormSection from '@/components/sections/ContactFormSection';
import type { ContactFormData } from '@/components/sections/ContactFormSection/types';
import ContactSection from '@/components/sections/ContactSection';
import HeroSection from '@/components/sections/HeroSection';
import LocationsSection from '@/components/sections/LocationsSection';
import SuccessModal from '@/components/shared/Modal/SuccessModal';
import { useState } from 'react';

import contactImage from '@/assets/images/backgrounds/hero_contact.webp';
import locationsImage from '@/assets/images/backgrounds/locations_contact.webp';

const ContactPage = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleFormSubmit = async (values: ContactFormData) => {
    // Simulate API call
    console.log('Form submitted:', values);

    // In real app, you would make an API call here
    // await sendContactForm(values);

    // For demo purposes, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
  };

  const handleFormSuccess = () => {
    setIsSuccessModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <>
      <HeroSection variant="banner" title="Contact Us" backgroundImageUrl={contactImage} />
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
      <ContactFormSection onSubmit={handleFormSubmit} onSuccess={handleFormSuccess} />

      <SuccessModal
        isOpen={isSuccessModalOpen}
        onClose={handleCloseModal}
        title="Message Sent Successfully!"
        message="Thank you for contacting us. We have received your message and will get back to you as soon as possible."
      />
    </>
  );
};

export default ContactPage;
