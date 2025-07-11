import React from 'react';
import { Link } from 'react-router-dom';

interface IBreadcrumbItem {
  label: string;
  path?: string;
}

interface IBreadcrumbsProps {
  items: IBreadcrumbItem[];
}

const Breadcrumbs: React.FC<IBreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex items-center gap-2 text-lg">
        {items.map((item, index) => (
          <li key={index} className="flex items-center gap-2">
            {item.path ? (
              <Link to={item.path} className="text-primary hover:underline">
                {item.label}
              </Link>
            ) : (
              <span className="text-neutral-500">{item.label}</span>
            )}
            {index < items.length - 1 && <span className="text-neutral-500">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
