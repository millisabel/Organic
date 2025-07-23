import { NavLink } from '@/components/shared/Navigation/NavLink';
import { useNavigationLinks } from '@/hooks/useNavigationLinks';
import { cn } from '../../../utils/helpers';
import type { NavigationProps } from './types';

const Navigation = ({ isMobile, onLinkClick, className }: NavigationProps) => {
  const { main: links } = useNavigationLinks();

  return (
    <nav className={className}>
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
