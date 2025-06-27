import { Button } from '@/components/ui/Button';
import InstagramIcon from '@/components/icons/InstagramIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import PinterestIcon from '@/components/icons/PinterestIcon';

const socials = [
  {
    href: 'https://www.instagram.com',
    label: 'Instagram',
    icon: <InstagramIcon size="md" variant="social" />,
  },
  {
    href: 'https://www.facebook.com',
    label: 'Facebook',
    icon: <FacebookIcon fill="currentColor" stroke="none" size="md" variant="social" />,
  },
  {
    href: 'https://www.twitter.com',
    label: 'Twitter',
    icon: <TwitterIcon fill="currentColor" stroke="none" size="md" variant="social" />,
  },
  {
    href: 'https://www.pinterest.com',
    label: 'Pinterest',
    icon: (
      <PinterestIcon
        viewBox="0 0 20 21"
        fill="currentColor"
        stroke="none"
        size="md"
        variant="social"
      />
    ),
  },
];

interface SocialButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialButton = ({ href, label, icon }: SocialButtonProps) => (
  <Button variant="social" size="round" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon}
    </a>
  </Button>
);

export const SocialButtons = socials.map((item) => (
  <SocialButton
    key={item.label}
    href={item.href}
    label={item.label}
    icon={item.icon}
    data-component="SocialButton"
  />
));
