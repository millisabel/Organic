import Button from '@/components/ui/Button/Button';
import type { SocialButtonProps } from '.';
import { ICONS } from './icons';

const SocialButton = ({ socialType, href, ...buttonProps }: SocialButtonProps) => {
  const Icon = ICONS[socialType];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.open(href, '_blank');
    e.currentTarget.blur();
  };

  return (
    <Button
      variant="transparent"
      size="circle"
      asChild
      nameComponent="SocialButton"
      aria-label={`${socialType} button`}
      {...buttonProps}
    >
      <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick}>
        <Icon />
      </a>
    </Button>
  );
};

export default SocialButton;
