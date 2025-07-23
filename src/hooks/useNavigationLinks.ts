import { useMemo } from 'react';

/**
 * Interface for a single navigation link
 */
export interface NavigationLink {
  href: string;
  text: string;
  external?: boolean; // For external links (opens in new tab)
}

/**
 * Interface for all navigation links organized by section
 */
export interface NavigationLinks {
  main: NavigationLink[]; // Main navigation (Header)
  footer: NavigationLink[]; // Footer navigation
  social: NavigationLink[]; // Social media links
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
        { href: 'https://facebook.com', text: 'Facebook', external: true },
        { href: 'https://twitter.com', text: 'Twitter', external: true },
        { href: 'https://instagram.com', text: 'Instagram', external: true },
        { href: 'https://linkedin.com', text: 'LinkedIn', external: true },
      ],
    }),
    [], // Empty dependency array ensures links are memoized
  );

  return links;
};
