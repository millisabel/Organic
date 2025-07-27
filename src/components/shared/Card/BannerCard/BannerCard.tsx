import CheckIcon from '@/components/shared/Icon/CheckIcon';
import { useIsBelowBreakpoint } from '@/hooks/useIsBelowBreakpoint';
import { getImageUrl } from '@/utils/helpers';
import { useState } from 'react';
import type { BannerCardProps } from './types';
import List from '@/components/ui/Typography/List';
import Title from '@/components/ui/Typography/Title';
import GoToShop from '@/components/shared/Button/GoToShop/GoToShop';

const BannerCard = ({
  flipDirection = 'right',
  imageUrl,
  title,
  subtitle,
  backFeatures,
  titleColor = 'text-white',
  imageSize,
}: BannerCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const isMobile = useIsBelowBreakpoint('md');
  const image = getImageUrl('banner', imageUrl);

  const handleMouseEnter = () => {
    if (!isMobile) setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsFlipped(false);
  };

  const handleClick = () => {
    if (isMobile) setIsFlipped(!isFlipped);
  };

  const containerStyle = {
    position: 'relative' as const,
    width: '100%',
    height: '100%',
    perspective: '1000px',
    transformStyle: 'preserve-3d' as const,
    transform: isFlipped
      ? `rotateY(${flipDirection === 'left' ? '-180deg' : '180deg'})`
      : 'rotateY(0deg)',
    transition: 'transform 0.6s ease-in-out',
  };

  const faceStyle = {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden' as const,
  };

  const backStyle = {
    ...faceStyle,
    transform: `rotateY(${flipDirection === 'left' ? '-180deg' : '180deg'})`,
  };

  return (
    <div
      className="w-full h-[370px] min-h-[370px] group"
      style={containerStyle}
      tabIndex={0}
      aria-label="Flip banner card"
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-component="BannerCard"
    >
      {/* face front */}
      <div style={faceStyle}>
        <div
          className="w-full h-full flex flex-col lg:flex-row items-center justify-center p-12 bg-cover bg-center rounded-[20px]"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="flex flex-col gap-4 items-center lg:items-start w-full lg:w-1/2">
            <Title
              variant="sectionTitle"
              level={2}
              className={`order-2 text-2xl md:text-4xl ${titleColor}`}
            >
              {title}
            </Title>
            <Title variant="sectionSubTitle" level={3} className={`order-1`}>
              {subtitle}
            </Title>
          </div>
          <div className="hidden lg:block w-full lg:w-1/2 h-full" aria-hidden="true" />
        </div>
      </div>

      {/* face back */}
      <div style={backStyle}>
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 p-6 md:p-8 bg-primary rounded-[20px]">
          {backFeatures && backFeatures.length > 0 && (
            <List
              variant="default"
              className="text-white"
              items={backFeatures}
              icon={<CheckIcon className="text-green-400 flex-shrink-0" size="sm" />}
            ></List>
          )}
          <GoToShop variant="light">Shop Now</GoToShop>
        </div>
      </div>
    </div>
  );
};

export default BannerCard;
