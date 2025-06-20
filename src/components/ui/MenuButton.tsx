import { motion, type MotionProps, type Variants } from 'framer-motion';
import { type SVGProps } from 'react';

import { cn } from '../../utils/helpers';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

type PathProps = SVGProps<SVGPathElement> & MotionProps;

const Path = (props: PathProps) => (
  <motion.path fill="transparent" strokeWidth="3" strokeLinecap="round" {...props} />
);

const topVariants: Variants = {
  closed: { d: 'M 2.5 4.5 L 20.5 4.5' },
  open: { d: 'M 3.5 19.5 L 19.5 3.5' },
};

const middleVariants: Variants = {
  closed: { d: 'M 2.5 11.5 L 20.5 11.5', opacity: 1 },
  open: { d: 'M 2.5 11.5 L 20.5 11.5', opacity: 0 },
};

const bottomVariants: Variants = {
  closed: { d: 'M 2.5 18.5 L 20.5 18.5' },
  open: { d: 'M 3.5 3.5 L 19.5 19.5' },
};

const MenuButton = ({ isOpen, onClick, className }: MenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn('group', className)}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      type="button"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={topVariants}
          className="stroke-primary transition-colors duration-300 ease-in-out group-hover:stroke-secondary"
        />
        <Path
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={middleVariants}
          transition={{ duration: 0.1 }}
          className="stroke-primary transition-colors duration-300 ease-in-out group-hover:stroke-secondary"
        />
        <Path
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={bottomVariants}
          className="stroke-primary transition-colors duration-300 ease-in-out group-hover:stroke-secondary"
        />
      </svg>
    </button>
  );
};

export default MenuButton;
