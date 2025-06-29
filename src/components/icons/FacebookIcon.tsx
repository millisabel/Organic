import { cn } from '../../utils/helpers';

interface Props {
  className?: string;
}

const FacebookIcon = ({ className }: Props) => {
  return (
    <svg
      className={cn('h-5 w-5 transition-transform duration-300 group-hover:scale-125', className)}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 22"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33V21.878A10.003 10.003 0 0022 12z"
      />
    </svg>
  );
};

export default FacebookIcon;
