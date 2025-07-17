import { cn } from '@/utils/helpers';
import UserIcon from '../../Icon/UserIcon';
import AuthorDisplay from '../AuthorDisplay';
import DateDisplay from '../DateDisplay';
import type { PostMetaInfoProps } from './types';

const PostMetaInfo = ({ author, date, className, format = 'long' }: PostMetaInfoProps) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-start md:items-center gap-2 text-gray-500 text-sm mb-10',
        className,
      )}
      data-component="PostMetaInfo"
    >
      {date && <DateDisplay date={date} label="Posted On" format={format} />}
      {author && (
        <AuthorDisplay
          author={author}
          label="By"
          icon={<UserIcon size="sm" className="text-secondary" />}
        />
      )}
    </div>
  );
};

export default PostMetaInfo;
