import { cn, formatDate } from '@/utils/helpers';
import type { DataBadgeProps } from '.';
import { dataBadgeContentClasses, dataBadgeVariants } from './variants';

const DataBadge = ({ date = new Date(), format = 'short', className }: DataBadgeProps) => {
  const shortDate = formatDate({ date, format });
  return (
    <div className={cn(dataBadgeVariants({ format }), className)}>
      <span className={cn(dataBadgeContentClasses({ formatDay: format }))}>
        {shortDate.split(' ')[1]}
      </span>
      <span className={cn(dataBadgeContentClasses({ formatMonth: format }))}>
        {shortDate.split(' ')[0]}
      </span>
      {format === 'long' && (
        <span className={cn(dataBadgeContentClasses({ formatMonth: format }))}>
          {shortDate.split(' ')[2]}
        </span>
      )}
    </div>
  );
};

export default DataBadge;
