import type { SocialType } from '@/components/shared/Button/SocialButton/types';
import { useMemo } from 'react';

/**
 * Interface for a single navigation link
 */
export interface NavigationLink {
  href: string;
  text: string;
  external?: boolean; // For external links (opens in new tab)
  icon?: string; // Icon for contact links
  socialType?: SocialType; // Social type for social media links
}

/**
 * Interface for all navigation links organized by section
 */
export interface NavigationLinks {
  main: NavigationLink[]; // Main navigation (Header)
  footer: NavigationLink[]; // Footer navigation
  social: NavigationLink[]; // Social media links
  contact: NavigationLink[]; // Contact links
}

/**
 * Hook that provides centralized navigation links for the application
 *
 * This hook centralizes all navigation links to avoid duplication
 * and make maintenance easier. It returns different sets of links
 * for different parts of the application (header, footer, social).
 *
 * @returns NavigationLinks object with main, footer, and social links
 *
 * @example
 * ```tsx
 * const { main, footer, social } = useNavigationLinks();
 *
 * // Use in header
 * main.map(link => <NavLink key={link.href} to={link.href}>{link.text}</NavLink>)
 *
 * // Use in footer
 * footer.map(link => <Link key={link.href} to={link.href}>{link.text}</Link>)
 * ```
 */
export const useNavigationLinks = (): NavigationLinks => {
  const links = useMemo(
    (): NavigationLinks => ({
      // Main navigation links for header
      main: [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About' },
        { href: '/shop', text: 'Shop' },
        { href: '/blog', text: 'Blog' },
        { href: '/team', text: 'Team' },
        { href: '/contact', text: 'Contact' },
      ],
      // Footer navigation links
      footer: [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About Us' },
        { href: '/shop', text: 'Shop' },
        { href: '/blog', text: 'Blog' },
        { href: '/team', text: 'Team' },
        { href: '/contact', text: 'Contact' },
        { href: '/cart', text: 'Cart' },
      ],
      // Social media links (external)
      social: [
        { href: 'https://facebook.com', text: 'Facebook', external: true, socialType: 'facebook' },
        { href: 'https://twitter.com', text: 'Twitter', external: true, socialType: 'twitter' },
        {
          href: 'https://instagram.com',
          text: 'Instagram',
          external: true,
          socialType: 'instagram',
        },
        {
          href: 'https://pinterest.com',
          text: 'Pinterest',
          external: true,
          socialType: 'pinterest',
        },
      ],
      contact: [
        { href: 'mailto:needhelp@organia.com', text: 'Email', external: true, icon: 'email.svg' },
        { href: 'tel:666888888', text: 'Phone', external: true, icon: 'phone.svg' },
        {
          href: 'https://www.google.com/maps/place/88+road,+borklyn+street,+USA/@40.7127755,-74.0059731,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2585ff9df2f6d:0xf876cceb6e3fae97!8m2!3d40.7127755!4d-74.0037844',
          text: 'Address',
          external: true,
          icon: 'location.svg',
        },
      ],
    }),
    [], // Empty dependency array ensures links are memoized
  );

  return links;
};
