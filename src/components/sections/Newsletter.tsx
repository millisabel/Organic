import newsletterBg from '@assets/images/backgrounds/newslatteer.webp';

import { Button } from '@/components/ui/Button/Button';
import { Input } from '@components/ui/Input';
import Modal from '@components/ui/Modal';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';

const NewsletterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const Newsletter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState('');

  const sectionStyle = {
    backgroundImage: `url(${newsletterBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <>
      <div className="bg-cover bg-center bg-no-repeat">
        <div style={sectionStyle} className="container mx-auto px-2 py-24 xs:rounded-3xl lg:px-20">
          <div className="flex flex-col items-center justify-between gap-8 rounded-lg lg:flex-row">
            <SectionHeader
              title="Subscribe to our Newsletter"
              titleColor="text-white"
              titleAlignDesktop="text-left"
              marginBottom="mb-0"
            />
            <Formik
              initialValues={{ email: '' }}
              validationSchema={NewsletterSchema}
              onSubmit={(values, { resetForm }) => {
                setSubmittedEmail(values.email);
                setIsModalOpen(true);
                resetForm();
              }}
            >
              {({ errors, touched, values, submitCount }) => (
                <Form className="flex w-full flex-col items-center space-y-4 lg:w-auto lg:flex-row lg:space-y-0 lg:space-x-2">
                  <div className="relative w-full lg:w-auto">
                    {errors.email && touched.email && (values.email || submitCount > 0) ? (
                      <div className="absolute bottom-full left-1/2 mb-1 w-full -translate-x-1/2 text-center text-sm text-error">
                        {errors.email}
                      </div>
                    ) : null}
                    <Field
                      as={Input}
                      id="email-newsletter"
                      name="email"
                      type="email"
                      placeholder="Your Email Address"
                      className="!py-5 rounded-xl text-2xl placeholder:italic placeholder:text-2xl"
                      wrapperClassName="w-full shrink-0 lg:w-[350px]"
                    />
                  </div>
                  <Button type="submit" variant="default" className="!py-4 text-lg">
                    Subscribe
                  </Button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary">Thank You!</h3>
          <p className="mt-4 text-text-light">
            You will now receive our newsletter at
            <br />
            <strong className="text-primary">{submittedEmail}</strong>
          </p>
        </div>
      </Modal>
    </>
  );
};

export default Newsletter;
