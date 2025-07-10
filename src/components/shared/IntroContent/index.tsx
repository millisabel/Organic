import HeaderContent from '@/components/shared/HeaderContent';
import ParagraphContent from '@/components/shared/ParagrahpContent';
import UserIcon from '@/components/ui/Icon/UserIcon';

interface IntroContentProps {
  formatDate: string;
  post: {
    title: string;
    description: string;
    author: string;
  };
}

const IntroContent = ({ formatDate, post }: IntroContentProps) => {
  return (
    <div
      className="md:absolute w-full md:-translate-y-1/2 bg-white md:rounded-2xl shadow-lg p-4 md:p-20"
      data-component="IntroContent"
    >
      <div className="flex flex-row items-center gap-2 text-gray-500 text-sm mb-10">
        <p className="text-gray-500 text-sm mb-10">
          <span className="font-bold">Posted On:</span> <span className=" mr-10">{formatDate}</span>
        </p>
        <p className="text-gray-500 text-sm mb-10">
          <span className="text-secondary">
            <UserIcon />
          </span>
          By {post?.author}
        </p>
      </div>
      <HeaderContent text={post?.title} level={1} size="h1" className="mb-10" />
      <ParagraphContent text={post?.description} className="w-1/2" />
    </div>
  );
};

export default IntroContent;
