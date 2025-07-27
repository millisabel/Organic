import Icon from '@/components/ui/Icon';
import React from 'react';

const ArrowIcon = (props: React.ComponentProps<typeof Icon>) => {
  const { direction = 'right' } = props;
  const path =
    direction === 'right'
      ? 'M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
      : 'M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18';

  return (
    <Icon {...props} nameComponent="ArrowIcon">
      <circle cx="12" cy="12" r="11" strokeWidth="0" />
      <path strokeLinecap="round" strokeLinejoin="round" d={path} />
    </Icon>
  );
};

export default ArrowIcon;
