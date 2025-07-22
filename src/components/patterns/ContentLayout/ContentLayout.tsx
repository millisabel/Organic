import { cn } from '@/utils/helpers';
import type { ContentLayoutProps } from './types';
import { contentLayoutVariants } from './variants';

const ContentLayout = ({ children, variant, className }: ContentLayoutProps) => {
  return <div className={cn(contentLayoutVariants({ variant }), className)}>{children}</div>;
};

export default ContentLayout;
