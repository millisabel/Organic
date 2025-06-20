import { useMemo } from 'react';

import { useWindowWidth } from '../../hooks/useWindowWidth';
import { cn } from '../../utils/helpers';
import NavLink from './NavLink';

interface NavigationProps {
  isMobile?: boolean;
  onLinkClick?: () => void;
}

const Navigation = ({ isMobile, onLinkClick }: NavigationProps) => {
  const windowWidth = useWindowWidth();

  const links = useMemo(() => {
    const navLinks = [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'About' },
      { href: '/shop', text: 'Shop' },
      { href: '/blog', text: 'Blog' },
      { href: '/contact', text: 'Contact' },
    ];
    if (windowWidth < 1024) {
      navLinks.splice(2, 0, { href: '/services', text: 'Services' });
    }
    return navLinks;
  }, [windowWidth]);

  return (
    <nav>
      <ul
        className={cn('flex items-center gap-x-10', {
          'flex-col gap-y-10 text-3xl': isMobile,
        })}
      >
        {links.map(({ href, text }) => (
          <li key={href}>
            <NavLink to={href} onClick={onLinkClick}>
              {text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
