import Icon from '@/components/ui/Icon';
import React from 'react';

const SpinnerIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} variant="spinner" nameComponent="SpinnerIcon">
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </Icon>
);

export default SpinnerIcon;
