export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  theme?: 'light' | 'dark';
}

export type MobileMenuState = 'closed' | 'open';
export type MobileMenuTheme = 'light' | 'dark';
