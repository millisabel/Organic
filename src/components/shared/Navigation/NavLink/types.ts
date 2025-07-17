import type { ReactNode } from 'react';
import type { NavLinkProps as RouterNavLinkProps } from 'react-router-dom';

export interface NavLinkProps extends Omit<RouterNavLinkProps, 'className' | 'children'> {
  children: ReactNode;
  onClick?: () => void;
  exact?: boolean;
}

export type NavLinkState = 'default' | 'active';

export interface NavLinkHoverStyles {
  textColor: string;
  transform: string;
}
