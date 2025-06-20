import { motion, type MotionProps, type Variants } from 'framer-motion';
import { type SVGProps } from 'react';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

type PathProps = SVGProps<SVGPathElement> & MotionProps;

const Path = (props: PathProps) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const topVariants: Variants = {
  closed: { d: 'M 2 2.5 L 20 2.5' },
  open: { d: 'M 3 16.5 L 17 2.5' },
};

const middleVariants: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

const bottomVariants: Variants = {
  closed: { d: 'M 2 16.346 L 20 16.346' },
  open: { d: 'M 3 2.5 L 17 16.346' },
};

const MenuButton = ({ isOpen, onClick, className }: MenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={className}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      type="button"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path initial="closed" animate={isOpen ? 'open' : 'closed'} variants={topVariants} />
        <Path
          d="M 2 9.423 L 20 9.423"
          initial="closed"
          animate={isOpen ? 'open' : 'closed'}
          variants={middleVariants}
          transition={{ duration: 0.1 }}
        />
        <Path initial="closed" animate={isOpen ? 'open' : 'closed'} variants={bottomVariants} />
      </svg>
    </button>
  );
};

export default MenuButton;
