import { Navigation } from '@/components/layout/Navigation';
import CloseButton from '@/components/shared/Button/CloseButton/CloseButton';
import { AnimatePresence, motion } from 'framer-motion';
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
          <CloseButton
            onClick={onClose}
            aria-label="Close menu"
            className="absolute top-4 right-4"
          />
          <Navigation isMobile onLinkClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
