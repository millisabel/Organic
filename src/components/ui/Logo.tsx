import { cn } from '@/utils/helpers';
import { motion, type Variants } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import LogoIcon from '../icons/LogoIcon';

interface LogoProps {
  /**
   * Animation speed multiplier.
   * 1 = normal, 2 = twice as fast, 0.5 = twice as slow.
   * @default 1
   */
  speed?: number;
}

const Logo = ({ speed = 0.5 }: LogoProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const svgVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05 / speed,
      },
    },
  };

  const pathVariants: Variants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 0.7 / speed,
      },
    },
  };

  return (
    <Link
      to="/"
      className={cn('group flex items-center gap-x-[10px]', isHomePage && 'pointer-events-none')}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={svgVariants}
        className="flex items-center"
      >
        <LogoIcon
          className="h-[54px] w-[36px] transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
          variants={pathVariants}
        />
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 / speed, delay: 1.2 / speed }}
        className="font-roboto text-[38px] font-bold text-primary transition-colors duration-300 group-hover:text-secondary"
      >
        Organic
      </motion.span>
    </Link>
  );
};

export default Logo;
