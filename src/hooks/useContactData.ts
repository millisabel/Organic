import type { SocialType } from '@/components/shared/Button/SocialButton/types';
import type { NavigationLink } from '@/types/navigation';
import { useMemo } from 'react';
import { useNavigationLinks } from './useNavigationLinks';

/**
 * Interface for transformed social link data
 */
export interface SocialLinkData {
  socialType: SocialType;
  title: string;
  href: string;
}

export const useContactData = () => {
  const { contact: contactLinks, social: socialLinks } = useNavigationLinks();

  // Transform contact links for InfoBlock component
  const contactLinksData = useMemo(
    (): NavigationLink[] =>
      contactLinks
        .filter(({ icon }) => icon) // Only include links with icons
        .map(({ href, text, icon, type, title }) => ({
          href,
          text,
          icon: icon!,
          title: title || text, // Используем title если есть, иначе text
          type,
        })),
    [contactLinks],
  );

  const emailItems = useMemo(
    () => contactLinksData.filter((item) => item.type === 'email'),
    [contactLinksData],
  );

  const phoneItems = useMemo(
    () => contactLinksData.filter((item) => item.type === 'phone'),
    [contactLinksData],
  );

  const addressItems = useMemo(
    () => contactLinksData.filter((item) => item.type === 'address'),
    [contactLinksData],
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
    emailItems,
    phoneItems,
    addressItems,
  };
};
