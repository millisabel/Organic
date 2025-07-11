import { Button } from '@/components/ui/Button';
import FacebookIcon from '@/components/ui/Icon/FacebookIcon';
import InstagramIcon from '@/components/ui/Icon/InstagramIcon';
import PinterestIcon from '@/components/ui/Icon/PinterestIcon';
import TwitterIcon from '@/components/ui/Icon/TwitterIcon';

const SOCIALS = {
  facebook: {
    label: 'Facebook',
    icon: <FacebookIcon fill="currentColor" stroke="none" size="md" />,
  },
  instagram: {
    label: 'Instagram',
    icon: <InstagramIcon size="md" />,
  },
  twitter: {
    label: 'Twitter',
    icon: <TwitterIcon fill="currentColor" stroke="none" size="md" />,
  },
  pinterest: {
    label: 'Pinterest',
    icon: <PinterestIcon viewBox="0 0 20 21" fill="currentColor" stroke="none" size="md" />,
  },
};

type Socials = Partial<Record<keyof typeof SOCIALS, string>>;

interface SocialButtonProps {
  socials: Socials;
  variant?: 'social' | 'socialNoBg';
}

const SocialButtonsList: React.FC<SocialButtonProps> = ({ socials, variant = 'social' }) => (
  <div className="flex gap-2" data-component="SocialButtons">
    {Object.entries(SOCIALS).map(([key, { label, icon }]) =>
      socials[key as keyof Socials] ? (
        <Button key={key} variant={variant} size="round" asChild data-component="SocialButton">
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
