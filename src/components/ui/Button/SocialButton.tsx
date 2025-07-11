import { Button } from '@/components/ui/Button';
import FacebookIcon from '@/components/ui/Icon/FacebookIcon';
import InstagramIcon from '@/components/ui/Icon/InstagramIcon';
import PinterestIcon from '@/components/ui/Icon/PinterestIcon';
import TwitterIcon from '@/components/ui/Icon/TwitterIcon';
import { cn } from '@/utils/helpers';

const SOCIALS = {
  facebook: {
    label: 'Facebook',
    icon: <FacebookIcon fill="currentColor" stroke="none" size="md" variant="local" />,
  },
  instagram: {
    label: 'Instagram',
    icon: <InstagramIcon size="md" variant="local" />,
  },
  twitter: {
    label: 'Twitter',
    icon: <TwitterIcon fill="currentColor" stroke="none" size="md" variant="local" />,
  },
  pinterest: {
    label: 'Pinterest',
    icon: (
      <PinterestIcon
        viewBox="0 0 20 21"
        fill="currentColor"
        stroke="none"
        size="md"
        variant="local"
      />
    ),
  },
};

type Socials = Partial<Record<keyof typeof SOCIALS, string>>;

interface SocialButtonProps {
  socials: Socials;
  className?: string;
  variant?: 'social' | 'socialNoBg';
  size?: 'round' | 'roundSmall' | 'default';
}

const SocialButtonsList: React.FC<SocialButtonProps> = ({
  socials,
  variant = 'social',
  size = 'round',
  className,
}) => (
  <div className={cn('flex gap-2', className)} data-component="SocialButtons">
    {Object.entries(SOCIALS).map(([key, { label, icon }]) =>
      socials[key as keyof Socials] ? (
        <Button key={key} variant={variant} size={size} asChild data-component="SocialButton">
          <a
            href={socials[key as keyof Socials]!}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {icon}
          </a>
        </Button>
      ) : null,
    )}
  </div>
);

export default SocialButtonsList;
