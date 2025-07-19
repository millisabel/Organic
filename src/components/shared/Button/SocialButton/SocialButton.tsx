import Button from '@/components/ui/Button/Button';
import type { SocialButtonProps } from '.';
import { ICONS } from './icons';

const SocialButton = ({ socialType, href, ...buttonProps }: SocialButtonProps) => {
  const Icon = ICONS[socialType];

  return (
    <Button
      variant="transparent"
      size="circle"
      asChild
      nameComponent="SocialButton"
      aria-label={`${socialType} button`}
      {...buttonProps}
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon />
      </a>
    </Button>
  );
};

export default SocialButton;
