import { formatDate, type FormatDateProps } from '@/utils/helpers';

interface DataBadgeProps {
  date: string | Date;
  format?: FormatDateProps['format'];
  className?: string;
}

const DataBadge = ({ date = new Date(), format, className }: DataBadgeProps) => {
  const shortDate = formatDate({ date, format: format || 'short' });
  return (
    <div
      className={`absolute top-4 left-4 flex flex-col items-center justify-center w-20 h-20 bg-white rounded-full font-bold shadow text-primary select-none ${className}`}
    >
      <span className="text-2xl">{shortDate.split(' ')[1]}</span>
      <span className="text-sm">{shortDate.split(' ')[0]}</span>
    </div>
  );
};

export default DataBadge;
