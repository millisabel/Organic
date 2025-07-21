import newsletterBg from '@assets/images/backgrounds/newslatteer.webp';

import type { SectionProps } from '@/components/layout/Section/Section';
import Section from '@/components/layout/Section/Section';
import CloseButton from '@/components/shared/Button/CloseButton/CloseButton';
import Button from '@/components/ui/Button';
import Title from '@/components/ui/Typography/Title';
import Input from '@components/ui/Input';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

const NewsletterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

interface NewsletterProps extends Omit<SectionProps, 'children'> {
  onSubmit: (email: string) => void;
}

const Newsletter = ({ onSubmit, ...props }: NewsletterProps) => {
  return (
    <Section backgroundImageUrl={newsletterBg} {...props}>
      <div className="flex flex-col items-center justify-between gap-8 rounded-lg lg:flex-row">
        <Title
          level={2}
          variant="sectionTitle"
          className="lg:w-1/2 text-4xl lg:text-6xl text-white text-center lg:text-left leading-relaxed lg:pr-[25%]"
        >
          Subscribe to our Newsletter
        </Title>
        <Formik
          initialValues={{ email: '' }}
          validationSchema={NewsletterSchema}
          onSubmit={(values, { resetForm }) => {
            onSubmit(values.email);
            resetForm();
          }}
        >
          {({ errors, touched, values, submitCount, setFieldValue }) => (
            <Form className="flex flex-col lg:flex-row items-center gap-4 lg:w-1/2">
              <div className="relative w-full">
                {errors.email && touched.email && (values.email || submitCount > 0) ? (
                  <div className="absolute bottom-full left-1/2 mb-1 w-full -translate-x-1/2 text-center text-sm text-accent-red">
                    {errors.email}
                  </div>
                ) : null}
                <div className="relative">
                  <Field
                    as={Input}
                    id="email-newsletter"
                    name="email"
                    type="email"
                    placeholder="Your Email Address"
                    className="p-4 rounded-xl text-2xl placeholder:italic placeholder:text-2xl pr-12"
                  />
                  {values.email && (
                    <CloseButton
                      onClick={() => setFieldValue('email', '')}
                      onMouseDown={(e) => e.preventDefault()}
                      className="absolute right-3 top-1/2 -translate-y-1/2"
                      variant="clear"
                      aria-label="Clear email field"
                    />
                  )}
                </div>
              </div>
              <Button type="submit" variant="default" className="!py-4 text-lg">
                Subscribe
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Section>
  );
};

export default Newsletter;
