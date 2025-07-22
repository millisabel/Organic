import type { SectionProps } from '@/components/layout/Section/types';

export interface NewsletterProps extends Omit<SectionProps, 'children' | 'onSubmit'> {
  onSubmit: (email: string) => void;
}
