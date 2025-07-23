import Section from '@/components/layout/Section';
import ContentLayout from '@/components/patterns/ContentLayout';
import Button from '@/components/ui/Button';
import FormField from '@/components/ui/Form/FormField';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import type { ContactFormData, ContactFormSectionProps } from './types';

const ContactFormSchema = Yup.object().shape({
  fullName: Yup.string().required('Full name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  company: Yup.string().required('Company is required'),
  subject: Yup.string().required('Subject is required'),
  message: Yup.string().required('Message is required'),
});

const ContactFormSection = ({ onSubmit, onSuccess }: ContactFormSectionProps) => {
  const initialValues: ContactFormData = {
    fullName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  };

  return (
    <Section>
      <Formik
        initialValues={initialValues}
        validationSchema={ContactFormSchema}
        onSubmit={async (values, { resetForm }) => {
          try {
            await onSubmit(values);
            resetForm();
            onSuccess?.();
          } catch (error) {
            console.error('Form submission error:', error);
          }
        }}
      >
        {({ values, errors, touched, submitCount, isValid, dirty, handleSubmit }) => {
          const hasErrors = Object.keys(errors).length > 0;
          const showFormError = submitCount > 0 && hasErrors;

          return (
            <Form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <ContentLayout variant="gridColumn_2" className="justify-start gap-y-16 mb-16">
                <FormField
                  id="fullName"
                  name="fullName"
                  label="Full Name"
                  type="text"
                  placeholder="Your Email Address"
                  required
                  error={errors.fullName}
                  touched={touched.fullName}
                />
                <FormField
                  id="email"
                  name="email"
                  label="Your Email"
                  type="email"
                  placeholder="example@yourmail.com"
                  required
                  error={errors.email}
                  touched={touched.email}
                />
                <FormField
                  id="company"
                  name="company"
                  label="Company"
                  type="text"
                  placeholder="yourcompany name here"
                  required
                  error={errors.company}
                  touched={touched.company}
                  showError={!!values.company || submitCount > 0}
                />
                <FormField
                  id="subject"
                  name="subject"
                  label="Subject"
                  type="text"
                  placeholder="how can we help"
                  required
                  error={errors.subject}
                  touched={touched.subject}
                  showError={!!values.company || submitCount > 0}
                />
                <FormField
                  id="message"
                  name="message"
                  label="Message"
                  as="textarea"
                  placeholder="hello there,i would like to talk about how to..."
                  required
                  error={errors.message}
                  touched={touched.message}
                  showError={!!values.company || submitCount > 0}
                  rows={7}
                  className="col-span-2"
                />
              </ContentLayout>

              {/* Form Error Message */}
              {showFormError && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                  <p className="text-red-700 text-sm font-medium">
                    Please check the form. Not all fields are filled correctly.
                  </p>
                </div>
              )}

              <Button type="submit" variant="default">
                Send Message
              </Button>
            </Form>
          );
        }}
      </Formik>
    </Section>
  );
};

export default ContactFormSection;
