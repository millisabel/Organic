import FacebookIcon from '@/components/ui/Icon/FacebookIcon';
import InstagramIcon from '@/components/ui/Icon/InstagramIcon';
import PinterestIcon from '@/components/ui/Icon/PinterestIcon';
import TwitterIcon from '@/components/ui/Icon/TwitterIcon';

import type { SocialType } from './types';

export const ICONS: Record<SocialType, React.ComponentType<any>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  pinterest: PinterestIcon,
};
