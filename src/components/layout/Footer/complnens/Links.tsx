import Title from '@/components/ui/Typography/Title';
import { Link } from 'react-router-dom';

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
  return (
    <div className={className}>
      <Title level={2} variant="cardTitle" className="mb-8">
        {title}
      </Title>
      <div className="space-y-5">
        {data.map((item) => (
          <Link
            key={item.title}
            to={item.href}
            className="block text-text hover:underline"
            target={item.href.startsWith('http') ? '_blank' : '_self'}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Links;
