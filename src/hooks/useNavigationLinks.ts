import type { NavigationLinks } from '@/types/navigation';
import { useMemo } from 'react';

export const useNavigationLinks = (): NavigationLinks => {
  const links = useMemo(
    (): NavigationLinks => ({
      main: [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About' },
        { href: '/shop', text: 'Shop' },
        { href: '/blog', text: 'Blog' },
        { href: '/team', text: 'Team' },
        { href: '/contact', text: 'Contact' },
      ],
      footer: [
        { href: '/', text: 'Home' },
        { href: '/about', text: 'About Us' },
        { href: '/shop', text: 'Shop' },
        { href: '/blog', text: 'Blog' },
        { href: '/team', text: 'Team' },
        { href: '/contact', text: 'Contact' },
        { href: '/cart', text: 'Cart' },
        { href: '*', text: '404' },
      ],
      social: [
        {
          href: 'https://facebook.com',
          text: 'Facebook',
          external: true,
          socialType: 'facebook',
        },
        {
          href: 'https://twitter.com',
          text: 'Twitter',
          external: true,
          socialType: 'twitter',
        },
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
        {
          href: 'mailto:needhelp@organia.com',
          text: 'Email',
          external: true,
          icon: 'email.svg',
          type: 'email',
        },
        { href: 'tel:666888888', text: 'Phone', external: true, icon: 'phone.svg', type: 'phone' },
        {
          href: 'https://www.google.com/maps/place/88+road,+borklyn+street,+USA/@40.7127755,-74.0059731,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2585ff9df2f6d:0xf876cceb6e3fae97!8m2!3d40.7127755!4d-74.0037844',
          text: '299 Park Avenue New York, New York 10171',
          external: true,
          icon: 'location.svg',
          title: 'New York, USA',
          type: 'address',
        },
        {
          href: 'https://www.google.com/maps/place/30+Stamford+Street+London+SE1+9LQ',
          text: '30 Stamford Street, London SE1 9LQ',
          external: true,
          icon: 'location.svg',
          title: 'London, UK',
          type: 'address',
        },
      ],
    }),
    [],
  );

  return links;
};
