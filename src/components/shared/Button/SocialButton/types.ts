export type SocialType = 'facebook' | 'instagram' | 'twitter' | 'pinterest';

export interface SocialButtonProps {
  type: SocialType;
  href: string;
  className?: string;
}
