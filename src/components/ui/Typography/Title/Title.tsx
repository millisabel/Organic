import { cn } from '@/utils/helpers';
import type { TitleProps } from './types';
import { titleVariants } from './variants';

const Title = ({ text, variant, level = 2, className, children, ...props }: TitleProps) => {
  const content = children || text;

  const commonProps = {
    className: cn(titleVariants({ variant }), className),
    'data-component': 'Title',
    ...props,
  };

  switch (level) {
    case 1:
      return <h1 {...commonProps}>{content}</h1>;
    case 2:
      return <h2 {...commonProps}>{content}</h2>;
    case 3:
      return <h3 {...commonProps}>{content}</h3>;
    case 4:
      return <h4 {...commonProps}>{content}</h4>;
    case 5:
      return <h5 {...commonProps}>{content}</h5>;
    case 6:
      return <h6 {...commonProps}>{content}</h6>;
    default:
      return <h2 {...commonProps}>{content}</h2>;
  }
};

export default Title;
