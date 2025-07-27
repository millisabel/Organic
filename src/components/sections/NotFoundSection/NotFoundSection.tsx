import Section from '@/components/layout/Section/Section';
import type { NotFoundSectionProps } from './types';

const NotFoundSection = ({
  title = 'Product not found!',
  message = 'The product you are looking for does not exist.',
  className,
  ...props
}: NotFoundSectionProps) => {
  return (
    <Section className={`text-center py-20 ${className || ''}`} {...props}>
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>
        <p className="text-gray-600 mb-8">{message}</p>
        <div className="flex justify-center">
          <a
            href="/shop"
            className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
          >
            Back to Shop
          </a>
        </div>
      </div>
    </Section>
  );
};

export default NotFoundSection;
