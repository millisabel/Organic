import { cn } from '../../utils/helpers';

interface Props {
  className?: string;
}

const TwitterIcon = ({ className }: Props) => {
  return (
    <svg
      className={cn('h-5 w-5 transition-transform duration-300 group-hover:scale-125', className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M22.46,6C21.69,6.35,20.86,6.58,20,6.69A4.42,4.42,0,0,0,23,5.54a4.38,4.38,0,0,1-1.64.63,4.41,4.41,0,0,0-7.5,4,12.47,12.47,0,0,1-9.05-4.59A4.41,4.41,0,0,0,6.46,12.3a4.39,4.39,0,0,1-2-.56v.05a4.41,4.41,0,0,0,3.54,4.32,4.42,4.42,0,0,1-1.94.08,4.41,4.41,0,0,0,4.12,3.06,8.86,8.86,0,0,1-5.46,1.88,8.73,8.73,0,0,1-1.05-.06,12.46,12.46,0,0,0,6.75,2,12.43,12.43,0,0,0,12.5-12.5.23.23,0,0,1,.05-.5A8.83,8.83,0,0,0,24,5.19,8.74,8.74,0,0,1,21.5,6.08a4.36,4.36,0,0,0,1-1.08Z" />
    </svg>
  );
};

export default TwitterIcon;
