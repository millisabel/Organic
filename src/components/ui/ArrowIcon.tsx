const ArrowIcon = () => {
  return (
    <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-arrowFill text-white transition-colors group-hover:bg-white group-hover:text-arrowFill">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-3 w-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
        />
      </svg>
    </span>
  );
};

export default ArrowIcon;
