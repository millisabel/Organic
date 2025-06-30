import Icon from '@/components/ui/Icon';
import React from 'react';

const StarIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} data-component="StarIcon" variant="noHover">
    <path
      d="M10 0L12.2451 6.90983H19.5106L13.6327 11.1803L15.8779 18.0902L10 13.8197L4.12215 18.0902L6.36729 11.1803L0.489435 6.90983H7.75485L10 0Z"
      fill="currentColor"
    />
  </Icon>
);

export default StarIcon;
