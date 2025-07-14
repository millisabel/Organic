import CloseButton from '@/components/ui/Button/CloseButton';
import { AnimatePresence, motion } from 'framer-motion';
import Navigation from '../Navigation';
import type { MobileMenuProps } from './types';
import { defaultMobileMenuState, mobileMenuStyles, mobileMenuVariants } from './variants';

const MobileMenu = ({ isOpen, onClose, theme = 'light' }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={defaultMobileMenuState}
          animate="open"
          exit={defaultMobileMenuState}
          variants={mobileMenuVariants}
          className={mobileMenuStyles({ theme })}
        >
          <CloseButton onClick={onClose} />
          <Navigation isMobile onLinkClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
