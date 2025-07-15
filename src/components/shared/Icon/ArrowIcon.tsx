import { Icon } from '@/components/ui/Icon';
import React from 'react';

const ArrowIcon = (props: React.ComponentProps<typeof Icon>) => {
  return (
    <Icon {...props} nameComponent="ArrowIcon">
      <circle cx="12" cy="12" r="11" strokeWidth="0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </Icon>
  );
};

export default ArrowIcon;
