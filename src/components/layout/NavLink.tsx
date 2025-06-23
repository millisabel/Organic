import { clsx } from 'clsx';
import { useRef, type FC, type ReactNode } from 'react';
import {
  NavLink as RouterNavLink,
  useLocation,
  type NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom';

interface NavLinkProps extends Omit<RouterNavLinkProps, 'className' | 'children'> {
  children: ReactNode;
  onClick?: () => void;
  exact?: boolean;
}

const NavLink: FC<NavLinkProps> = ({ to, children, onClick, exact = false, ...props }) => {
  const location = useLocation();
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const restProps: Omit<RouterNavLinkProps, 'to' | 'children' | 'onClick' | 'className'> = props;

  const handleMouseEnter = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (event.currentTarget.classList.contains('active')) {
      return;
    }

    spansRef.current.forEach((span, i) => {
      if (!span) return;
      setTimeout(() => {
        span.classList.add('text-accent', '-translate-y-[15px]');
      }, i * 50);

      setTimeout(
        () => {
          span.classList.remove('text-accent', '-translate-y-[15px]');
        },
        300 + i * 50,
      );
    });
  };

  const text = typeof children === 'string' ? children : '';

  // Определяем активность ссылки вручную, если exact=true
  const isActiveOverride = exact && typeof to === 'string' ? location.pathname === to : undefined;

  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        clsx(
          'nav-link relative block select-none px-2 py-1 transition-colors duration-300 ease-in-out',
          'after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:-translate-x-1/2 after:bg-secondary after:transition-all after:duration-300 after:ease-in-out',
          {
            active: isActiveOverride ?? isActive,
            'text-accent': isActiveOverride ?? isActive,
            'text-primary': !(isActiveOverride ?? isActive),
          },
        )
      }
      onMouseEnter={handleMouseEnter}
      {...restProps}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            spansRef.current[i] = el;
          }}
          className="inline-block transition-all duration-300 ease-in-out"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </RouterNavLink>
  );
};

export default NavLink;
