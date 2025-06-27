import InstagramIcon from '@/components/icons/InstagramIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import PinterestIcon from '@/components/icons/PinterestIcon';

export const socials = [
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
