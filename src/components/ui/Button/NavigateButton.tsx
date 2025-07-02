import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

interface NavigateButtonProps {
  text: string;
  icon?: React.ReactNode;
  to: string;
  className?: string;
}

const NavigateButton = ({ text, icon, to, className }: NavigateButtonProps) => {
  return (
    <Button
      asChild
      variant="default"
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
