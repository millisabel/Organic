import type { SocialType } from '@/components/shared/Button/SocialButton/types';
import { useMemo } from 'react';
import { useNavigationLinks } from './useNavigationLinks';

/**
 * Interface for transformed contact link data
 */
export interface ContactLinkData {
  icon: string;
  title: string;
  href: string;
}

/**
 * Interface for transformed social link data
 */
export interface SocialLinkData {
  socialType: SocialType;
  title: string;
  href: string;
}

/**
 * Hook that transforms navigation links into format suitable for ContactSection
 *
 * This hook takes raw navigation links and transforms them into the specific
 * format needed by ContactSection components (InfoBlock and SocialButton).
 *
 * @returns Object with transformed contact and social links
 *
 * @example
 * ```tsx
 * const { contactLinks, socialLinks } = useContactData();
 *
 * // Use in InfoBlock
 * contactLinks.map(link => <InfoBlock iconSrc={link.icon} title={link.title} />)
 *
 * // Use in SocialButton
 * socialLinks.map(link => <SocialButton socialType={link.socialType} href={link.href} />)
 * ```
 */
export const useContactData = () => {
  const { contact: contactLinks, social: socialLinks } = useNavigationLinks();

  // Transform contact links for InfoBlock component
  const contactLinksData = useMemo(
    (): ContactLinkData[] =>
      contactLinks
        .filter(({ icon }) => icon) // Only include links with icons
        .map(({ href, text, icon }) => ({
          icon: icon!,
          title: text,
          href,
        })),
    [contactLinks],
  );

  // Transform social links for SocialButton component
  const socialLinksData = useMemo(
    (): SocialLinkData[] =>
      socialLinks
        .filter(({ socialType }) => socialType) // Only include links with socialType
        .map(({ href, text, socialType }) => ({
          socialType: socialType!,
          title: text,
          href,
        })),
    [socialLinks],
  );

  return {
    contactLinks: contactLinksData,
    socialLinks: socialLinksData,
  };
};
