import { useMemo } from 'react';

import { cn } from '../../utils/helpers';
import NavLink from './NavLink';

interface NavigationProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const Navigation = ({ isMobile, onLinkClick }: NavigationProps) => {
  const links = useMemo(
    () => [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'About' },
      { href: '/shop', text: 'Shop' },
      { href: '/blog', text: 'Blog' },
      { href: '/contact', text: 'Contact' },
    ],
    [],
  );

  return (
    <nav>
      <ul
        className={cn('flex items-center gap-x-10', {
          'flex-col gap-y-10 text-3xl': isMobile,
        })}
      >
        {links.map(({ href, text }) => (
          <li key={href}>
            <NavLink to={href} onClick={onLinkClick} {...(href === '/shop' ? { exact: true } : {})}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
