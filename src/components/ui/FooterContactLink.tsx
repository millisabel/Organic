import type { ReactNode } from 'react';

import { cn } from '../../utils/helpers';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}

const FooterContactLink = ({ href, children, className }: Props) => {
  return (
    <a
      href={href}
      className={cn(
        'text-text-light transition-all hover:-translate-y-0.5 hover:text-secondary',
        className,
      )}
    >
      {children}
    </a>
  );
};

export default FooterContactLink;
