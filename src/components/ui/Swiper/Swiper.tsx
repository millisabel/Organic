import { cn } from '@/utils/helpers';
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react';
import type { CustomSwiperProps, SwiperItem } from './types';

const Swiper = <T extends SwiperItem = SwiperItem>({
  items,
  renderItem,
  modules = [],
  className,
  ariaLabel,
  ...swiperProps
}: CustomSwiperProps<T>) => {
  return (
    <SwiperComponent
      modules={modules}
      className={cn('swiper-container', className)}
      aria-label={ariaLabel}
      {...swiperProps}
    >
      {items.map((item, index) => (
        <SwiperSlide key={item.id || index}>{renderItem(item, index)}</SwiperSlide>
      ))}
    </SwiperComponent>
  );
};

export default Swiper;
