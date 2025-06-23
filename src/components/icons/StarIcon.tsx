import React from 'react';

interface IStarIconProps extends React.SVGProps<SVGSVGElement> {}

const StarIcon: React.FC<IStarIconProps> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 20 19"
    fill="none"
    {...props}
  >
    <path
      d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75485L10 0Z"
      fill="currentColor"
    />
  </svg>
);

export default StarIcon;
