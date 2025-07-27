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
  const [submittedFormData, setSubmittedFormData] = useState<ContactFormData | null>(null);

  const handleFormSubmit = async (values: ContactFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    setSubmittedFormData(values);
  };

  const handleFormSuccess = () => {
    setIsSuccessModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsSuccessModalOpen(false);
    setSubmittedFormData(null);
  };

  return (
    <>
      <HeroSection variant="banner" title="Contact Us" backgroundImageUrl={contactImage} />
      <ContactSection
        title="We'd love to talk about how we can work together."
        description="Have questions about our organic products, sustainable farming practices, or want to learn more about our mission? We're here to help and would love to hear from you. Our team is ready to assist with any inquiries about our products, partnerships, or how we can support your healthy lifestyle."
      />
      <LocationsSection
        title="Our Farms"
        subtitle="Location"
        backgroundImageUrl={locationsImage}
        description="Our network of certified organic farms spans across the country, each carefully selected for their commitment to sustainable agriculture and environmental stewardship. Visit our locations to see firsthand how we grow and harvest the finest organic produce."
      />
      <ContactFormSection onSubmit={handleFormSubmit} onSuccess={handleFormSuccess} />

      {submittedFormData && (
        <SuccessModal
          isOpen={isSuccessModalOpen}
          onClose={handleCloseModal}
          title="Message Sent Successfully!"
          message={`Thank you for contacting us, ${submittedFormData.fullName}! We have received your message and will respond within 24 hours during business hours.`}
          details={`We'll reply to: ${submittedFormData.email}${submittedFormData.company ? ` from ${submittedFormData.company}` : ''}${submittedFormData.subject ? ` regarding: "${submittedFormData.subject}"` : ''}`}
          footerText="If you have any urgent questions, please call us at +1 (555) 123-4567"
        />
      )}
    </>
  );
};

export default ContactPage;
