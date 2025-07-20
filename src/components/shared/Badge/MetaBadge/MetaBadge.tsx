import Badge from '@/components/ui/Badge/Badge';
import type { MetaBadgeProps } from './types';

const MetaBadge = ({ label, description, ...badgeProps }: MetaBadgeProps) => {
  return (
    <Badge variant="meta" {...badgeProps}>
      <div className="flex flex-col items-center text-center">
        <span className="text-h1 font-bold leading-none">{label}</span>
        <span>{description}</span>
      </div>
    </Badge>
  );
};

export default MetaBadge;
