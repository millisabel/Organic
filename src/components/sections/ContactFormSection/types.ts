import type { SectionProps } from '@/components/layout/Section/types';

export interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

export type ContactFormSectionProps = Omit<SectionProps, 'onSubmit'> & {
  onSubmit: (values: ContactFormData) => void | Promise<void>;
  onSuccess?: () => void;
};
