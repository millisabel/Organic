import FacebookIcon from '@/components/shared/Icon/social/FacebookIcon';
import InstagramIcon from '@/components/shared/Icon/social/InstagramIcon';
import PinterestIcon from '@/components/shared/Icon/social/PinterestIcon';
import TwitterIcon from '@/components/shared/Icon/social/TwitterIcon';
import type { IconVariantProps } from '@/components/ui/Icon/types';

import type { SocialType } from './types';

export const ICONS: Record<SocialType, React.ComponentType<IconVariantProps>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  pinterest: PinterestIcon,
};
