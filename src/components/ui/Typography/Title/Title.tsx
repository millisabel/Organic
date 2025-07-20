import { cn } from '@/utils/helpers';
import type { TitleProps } from './types';
import { titleVariants } from './variants';

const Title = ({ children, variant, level = 2, className, ...props }: TitleProps) => {
  const commonProps = {
    className: cn(titleVariants({ variant }), className),
    'data-component': 'Title',
    ...props,
  };

  switch (level) {
    case 1:
      return <h1 {...commonProps}>{children}</h1>;
    case 2:
      return <h2 {...commonProps}>{children}</h2>;
    case 3:
      return <h3 {...commonProps}>{children}</h3>;
    case 4:
      return <h4 {...commonProps}>{children}</h4>;
    case 5:
      return <h5 {...commonProps}>{children}</h5>;
    case 6:
      return <h6 {...commonProps}>{children}</h6>;
    default:
      return <h2 {...commonProps}>{children}</h2>;
  }
};

export default Title;
