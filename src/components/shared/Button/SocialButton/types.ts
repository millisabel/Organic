import type { ButtonProps } from '@/components/ui/Button/types';

export type SocialType = 'facebook' | 'instagram' | 'twitter' | 'pinterest';

export interface SocialButtonProps extends ButtonProps {
  socialType: SocialType;
  href: string;
}
