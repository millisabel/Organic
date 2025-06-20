import { cn } from '@/utils/helpers';
import { themeColors } from '@/utils/resolved-tailwind-config';
import { useRef, type ReactNode } from 'react';
import { NavLink as RouterNavLink, type NavLinkProps } from 'react-router-dom';

interface WavyLinkProps extends NavLinkProps {
  children: ReactNode;
}

const NavLink = ({ to, children, ...props }: WavyLinkProps) => {
  const spansRef = useRef<(HTMLSpanElement | null)[]>([]);

  const handleMouseEnter = () => {
    spansRef.current.forEach((span, i) => {
      if (!span) return;
      setTimeout(() => {
        span.style.color = themeColors.accent;
        span.style.transform = 'translateY(-15px)';
        span.style.transition = 'transform 0.3s ease-out, color 0.3s ease-out';
      }, i * 50);

      setTimeout(
        () => {
          span.style.color = themeColors.primary;
          span.style.transform = 'translateY(0px)';
        },
        300 + i * 50,
      );
    });
  };

  const text = typeof children === 'string' ? children : '';

  return (
    <RouterNavLink
      to={to}
      onMouseEnter={handleMouseEnter}
      className={({ isActive }) =>
        cn(
          'font-roboto text-xl font-bold text-primary',
          isActive && 'text-accent pointer-events-none',
        )
      }
      {...props}
    >
      {text.split('').map((char, i) => (
        <span
          key={i}
          ref={(el) => {
            spansRef.current[i] = el;
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </RouterNavLink>
  );
};

export default NavLink;
