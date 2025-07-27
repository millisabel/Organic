import Image from '@/components/ui/Image';
import Paragraph from '@/components/ui/Typography/Paragraph';
import Title from '@/components/ui/Typography/Title';
import { cn } from '@/utils/helpers';
import React from 'react';
import type { InfoBlockProps } from './types';

const baseStyles = {
  container: 'flex flex-col sm:flex-row items-center gap-6 last:sm-0',
  icon: 'flex items-center justify-center w-[100px] h-[100px] aspect-square p-[5px] lg:p-[25px] rounded-[20px]',
  title: 'text-center sm:text-left text-xl text-primary font-roboto font-extrabold',
  description: 'text-center sm:text-left font-opensans text-base text-text',
};

const InfoBlock: React.FC<InfoBlockProps> = ({ item, className }) => {
  const { icon, title, description } = item;

  return (
    <div className={cn(baseStyles.container, className)} data-component="InfoBlock">
      {icon && (
        <div className={baseStyles.icon} role="presentation">
          <Image
            src={icon}
            folder="ico"
            alt=""
            aria-hidden={true}
            className="w-full h-full object-contain"
          />
        </div>
      )}
      <div>
        {title && (
          <Title level={3} className={baseStyles.title}>
            {' '}
            {title}{' '}
          </Title>
        )}
        {description && <Paragraph className={baseStyles.description}>{description}</Paragraph>}
      </div>
    </div>
  );
};

export default InfoBlock;
