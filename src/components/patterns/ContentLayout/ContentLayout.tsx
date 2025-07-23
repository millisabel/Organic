import { cn } from '@/utils/helpers';
import type { ContentLayoutProps } from './types';
import { contentLayoutVariants } from './variants';

const ContentLayout = ({
  children,
  variant = 'default',
  align = 'default',
  className,
}: ContentLayoutProps) => {
  return (
    <div
      className={cn(
        contentLayoutVariants({ variant }),
        contentLayoutVariants({ align }),
        className,
      )}
    >
      {children}
    </div>
  );
};

export default ContentLayout;
