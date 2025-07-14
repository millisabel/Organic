import Button from '@/components/ui/Button/Button';
import { cn } from '@/utils/helpers';
import { ICONS } from './icons';
import type { SocialButtonProps } from '.';

const SocialButton = ({ type, href, className }: SocialButtonProps) => {
  const Icon = ICONS[type];
  return (
    <Button
      variant="transparent"
      size="circle"
      asChild
      className={cn(className)}
      nameComponent="SocialButton"
      aria-label={`${type} button`}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon />
      </a>
    </Button>
  );
};

export default SocialButton;
