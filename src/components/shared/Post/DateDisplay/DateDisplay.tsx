import { cn, formatDate } from '@/utils/helpers';
import type { DateDisplayProps } from './types';

const DateDisplay = ({ date, format = 'long', label = '', className }: DateDisplayProps) => {
  const shortDate = formatDate({ date, format });
  return (
    <p className={cn('flex flex-row gap-2', className)}>
      {label && <span className="font-bold">{label}</span>}
      <span className="">{shortDate.split(' ')[1]}</span>
      <span className="">{shortDate.split(' ')[0]}</span>
      {format === 'long' && <span className="">{shortDate.split(' ')[2]}</span>}
    </p>
  );
};

export default DateDisplay;
