import { AnimatePresence, motion, type Variants } from 'framer-motion';

import CloseButton from '../ui/Button/CloseButton';
import Navigation from './Navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants: Variants = {
  closed: {
    x: '100%',
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
  open: {
    x: 0,
    transition: {
      type: 'tween',
      ease: 'easeInOut',
      duration: 0.3,
    },
  },
};

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white p-8"
        >
          <CloseButton onClick={onClose} />
          <Navigation isMobile onLinkClick={onClose} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
