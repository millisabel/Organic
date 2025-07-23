import Section from '@/components/layout/Section/Section';
import Layout from '@/components/patterns/ContentLayout';
import CloseButton from '@/components/shared/Button/CloseButton/CloseButton';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Form/Input';
import Title from '@/components/ui/Typography/Title';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import type { NewsletterProps } from './types';

const NewsletterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
});

const Newsletter = ({ title, onSubmit, ...props }: NewsletterProps) => {
  return (
    <Section {...props}>
      <Layout variant="gridColumn_2">
        <Title
          level={2}
          variant="sectionTitle"
          className="text-2xl lg:text-4xl text-white text-center lg:text-left leading-relaxed lg:pr-[45%]"
        >
          {title}
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
            <Form className="flex flex-col lg:flex-row items-center gap-4">
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
      </Layout>
    </Section>
  );
};

export default Newsletter;
