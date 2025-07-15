import Icon from '@/components/ui/Icon/Icon';
import React from 'react';

const MenuIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} nameComponent="MenuIcon">
    <line x1="0" y1="6" x2="24" y2="6" />
    <line x1="0" y1="12" x2="24" y2="12" />
    <line x1="0" y1="18" x2="24" y2="18" />
  </Icon>
);

export default MenuIcon;
