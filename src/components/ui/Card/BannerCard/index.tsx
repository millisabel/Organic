import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import FlipBannerCard from '@/components/shared/FlipBannerCard';
import { Button } from '@/components/ui/Button/Button';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import CheckIcon from '@/components/ui/Icon/CheckIcon';
import { cn } from '@/utils/helpers';
import { Link } from 'react-router-dom';
import type { BannerCardProps } from './types';

const styles = {
  container: 'w-full h-[370px] rounded-[20px] overflow-hidden',
  containerFront: 'flex-1 flex flex-col lg:flex-row items-center justify-between p-12',
  containerBack: 'flex flex-col justify-center items-center gap-6 p-6 md:p-8',
  backgroundImage: 'bg-cover bg-center',
  hiddenBlock: 'hidden lg:block w-full lg:w-1/2 h-full',
  list: 'flex flex-col justify-center items-center gap-3 text-openSans text-base md:text-lg',
  listItem: 'flex items-center gap-2 w-full text-primary font-medium',
};

const BannerCard = ({
  imageUrl,
  accent,
  title,
  flipDirection = 'right',
  bgBackColor = 'bg-black/10',
  backFeatures,
  category,
}: BannerCardProps) => {
  const front = () => {
    return (
      <div
        className={cn(styles.container, styles.containerFront, styles.backgroundImage)}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <SectionHeader
          title={title}
          subtitle={accent}
          titleAlignDesktop="text-left"
          titleAlignMobile="text-left"
          className="w-full lg:w-1/2"
        />
        <div className={styles.hiddenBlock} aria-hidden="true" />
      </div>
    );
  };

  const back = () => {
    return (
      <div className={cn(styles.container, styles.containerBack, bgBackColor)}>
        <ul className={styles.list} aria-label="Key features">
          {backFeatures.map((feature) => (
            <li key={feature} className={styles.listItem}>
              <CheckIcon className={'text-green-400 flex-shrink-0'} size="sm" />
              {feature}
            </li>
          ))}
        </ul>
        <Button asChild aria-label={`Show products in ${category}`}>
          <Link to={`/shop?category=${category}`}>
            Shop Now <ArrowIcon className="ml-2" />
          </Link>
        </Button>
      </div>
    );
  };

  return (
    <FlipBannerCard
      flipDirection={flipDirection}
      className="w-full h-[370px] rounded-[20px] overflow-hidden"
      front={front()}
      back={back()}
      data-component="BannerCard"
    />
  );
};

export default BannerCard;
