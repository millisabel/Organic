import { cn } from '@/utils/helpers';
import { motion, useAnimation, useInView, type Variants } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LogoIcon from './Icon/LogoIcon';

interface LogoProps {
  /**
   * Animation speed multiplier.
   * 1 = normal, 2 = twice as fast, 0.5 = twice as slow.
   * @default 1
   */
  speed?: number;
}

const Logo = ({ speed = 1 }: LogoProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const svgControls = useAnimation();
  const textControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      svgControls.start('visible');
      textControls.start('visible');
    }
  }, [isInView, svgControls, textControls]);

  const handleMouseEnter = () => {
    if (isHomePage) return;
    svgControls.set('hidden');
    svgControls.start('visible');
  };

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

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 / speed, delay: (0.8 + 0.7) / speed },
    },
  };

  return (
    <Link
      to="/"
      className={cn('group flex items-center gap-x-[10px]', isHomePage && 'pointer-events-none')}
      onMouseEnter={handleMouseEnter}
      ref={ref}
    >
      <motion.div
        animate={svgControls}
        initial="hidden"
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
        animate={textControls}
        initial="hidden"
        variants={textVariants}
        className="hidden font-roboto text-[38px] font-bold text-primary transition-colors duration-300 group-hover:text-secondary lg:inline"
      >
        Organic
      </motion.span>
    </Link>
  );
};

export default Logo;
