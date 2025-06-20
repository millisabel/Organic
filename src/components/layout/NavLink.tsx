import { useRef, type FC, type ReactNode } from 'react';
import {
  NavLink as RouterNavLink,
  type NavLinkProps as RouterNavLinkProps,
} from 'react-router-dom';

import { cn } from '../../utils/helpers';

interface NavLinkProps extends Omit<RouterNavLinkProps, 'className' | 'children'> {
  children: ReactNode;
  onClick?: () => void;
}

const NavLink: FC<NavLinkProps> = ({ to, children, onClick, ...props }) => {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);
  const restProps: Omit<RouterNavLinkProps, 'to' | 'children' | 'onClick' | 'className'> = props;

  const handleMouseEnter = () => {
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

  return (
    <RouterNavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        cn('font-roboto text-xl font-bold', {
          'text-accent pointer-events-none': isActive,
          'text-primary': !isActive,
        })
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
