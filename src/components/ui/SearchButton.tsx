import { Button } from './Button';

interface SearchButtonProps {
  onClick: () => void;
}

const SearchButton = ({ onClick }: SearchButtonProps) => {
  return (
    <Button variant="secondary" size="icon-lg" onClick={onClick} aria-label="Open search">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-primary transition-transform group-hover:scale-125"
        fill="none"
        viewBox="0 0 24 24"
        stroke="#ffffff"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </Button>
  );
};

export default SearchButton;
