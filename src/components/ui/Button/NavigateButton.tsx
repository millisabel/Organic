import { Button } from '@/components/ui/Button';
import type { VariantProps } from 'class-variance-authority';
import { Link } from 'react-router-dom';
import { buttonVariants } from './variants';

interface NavigateButtonProps {
  text: string;
  icon?: React.ReactNode;
  to: string;
  className?: string;
  variant?: VariantProps<typeof buttonVariants>['variant'];
}

const NavigateButton = ({
  text,
  icon,
  to,
  className,
  variant = 'default',
}: NavigateButtonProps) => {
  return (
    <Button
      asChild
      variant={variant}
      text={text}
      icon={icon}
      className={className}
      data-component="NavigateButton"
    >
      <Link to={to}>
        {text} {icon && <span className="ml-2">{icon}</span>}
      </Link>
    </Button>
  );
};

export default NavigateButton;
