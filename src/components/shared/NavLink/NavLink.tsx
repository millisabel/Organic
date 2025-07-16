import { useTextAnimation } from '@/hooks/useTextAnimation';
import { type FC } from 'react';
import { NavLink as RouterNavLink, useLocation } from 'react-router-dom';
import type { NavLinkProps } from './types';
import { navLinkVariants } from './variants';

const NavLink: FC<NavLinkProps> = ({ to, children, onClick, exact = false, ...props }) => {
  const location = useLocation();
  const { animateText, renderAnimatedText } = useTextAnimation();

  const text = typeof children === 'string' ? children : '';
  const isActiveOverride = exact && typeof to === 'string' ? location.pathname === to : undefined;

  const handleMouseEnter = () => {
    const isActive = isActiveOverride ?? false;
    animateText(isActive);
  };

  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        navLinkVariants({
          state: (isActiveOverride ?? isActive) ? 'active' : 'default',
        })
      }
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {renderAnimatedText(text)}
    </RouterNavLink>
  );
};

export default NavLink;
