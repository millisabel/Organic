import { Icon } from '@/components/ui/Icon';
import React from 'react';

const CheckIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} nameComponent="CheckIcon">
    <polyline points="20 6 9 17 4 12"></polyline>
  </Icon>
);

export default CheckIcon;
