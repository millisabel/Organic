import { cn, formatDate } from '@/utils/helpers';
import type { PostMetaInfoProps } from './postMetaInfo.types';
import AuthorDisplay from '../AuthorDisplay';

const PostMetaInfo = ({ author, date, className, format = 'long' }: PostMetaInfoProps) => {
  return (
    <div
      className={cn(
        'flex flex-col md:flex-row items-start md:items-center gap-2 text-gray-500 text-sm mb-10',
        className,
      )}
      data-component="PostMetaInfo"
    >
      <p className="flex flex-row items-start gap-2">
        <span className="font-bold">Posted On:</span>
        <span className="md:mr-10">{formatDate({ date, format })}</span>
      </p>
      <AuthorDisplay author={author} iconClassName="text-secondary" />
    </div>
  );
};

export default PostMetaInfo;
