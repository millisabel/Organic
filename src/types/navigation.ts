import type { SocialType } from '@/components/shared/Button/SocialButton/types';

export type ContactLinkType = 'address' | 'phone' | 'email';

/**
 * Unified interface for all navigation and contact links
 */
export interface NavigationLink {
  href: string;
  text: string;
  external?: boolean;
  icon?: string;
  socialType?: SocialType;
  title?: string;
  type?: ContactLinkType;
}

/**
 * Interface for all navigation links organized by section
 */
export interface NavigationLinks {
  main: NavigationLink[];
  footer: NavigationLink[];
  social: NavigationLink[];
  contact: NavigationLink[];
}
