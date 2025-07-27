import Title from '@/components/ui/Typography/Title';
import { cn } from '@/utils/helpers';
import { Link, useLocation } from 'react-router-dom';

interface DATA {
  title: string;
  href: string;
  value?: string;
}

interface LinksProps {
  title: string;
  data: DATA[];
  className?: string;
}

const Links = ({ title, data, className }: LinksProps) => {
  const location = useLocation();

  const isLinkActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/';
    }
    if (href === '*') {
      return location.pathname === '/404';
    }
    return location.pathname.startsWith(href);
  };

  const handleClick = (href: string) => {
    if (!href.startsWith('http')) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className={className}>
      <Title level={2} variant="cardTitle" className="mb-8">
        {title}
      </Title>
      <div className="space-y-5">
        {data.map((item) => {
          const isActive = isLinkActive(item.href);

          return (
            <Link
              key={item.title}
              to={item.href}
              onClick={() => handleClick(item.href)}
              className={cn(
                'block transition-colors duration-300',
                isActive
                  ? 'text-secondary font-semibold'
                  : 'text-text hover:text-secondary hover:underline',
              )}
              target={item.href.startsWith('http') ? '_blank' : '_self'}
              aria-current={isActive ? 'page' : undefined}
            >
              {item.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
