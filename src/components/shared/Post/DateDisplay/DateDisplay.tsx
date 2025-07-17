import { cn, formatDate } from '@/utils/helpers';
import type { DateDisplayProps } from './types';

const DateDisplay = ({ date, format = 'long', label = '', className }: DateDisplayProps) => {
  return (
    <p className={cn('flex flex-row items-start gap-2', className)}>
      {label && <span className="font-bold">{label}</span>}
      <span className="md:mr-10">{formatDate({ date, format })}</span>
    </p>
  );
};

export default DateDisplay;
