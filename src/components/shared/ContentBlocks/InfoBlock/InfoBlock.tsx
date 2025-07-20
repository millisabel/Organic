import Image from '@/components/ui/Image';
import Paragraph from '@/components/ui/Typography/Paragraph';
import Title from '@/components/ui/Typography/Title';
import clsx from 'clsx';
import React from 'react';
import type { InfoBlockProps } from './types';

const baseStyles = {
  container: 'flex flex-col sm:flex-row items-center gap-4 mb-6 sm:mb-0 last:sm-0',
  icon: 'flex items-center justify-center w-[100px] h-[100px] p-[5px] lg:p-[25px] rounded-[20px]',
  title: 'text-center sm:text-left text-2xl text-primary font-roboto font-extrabold',
  description: 'text-center sm:text-left font-opensans text-base text-text',
};

const InfoBlock: React.FC<InfoBlockProps> = ({ iconSrc, title, description, className }) => {
  if (!iconSrc && !title && !description) {
    return null;
  }

  return (
    <div className={clsx(baseStyles.container, className)} data-component="InfoBlock">
      {iconSrc && (
        <div className={baseStyles.icon} role="presentation">
          <Image
            src={iconSrc}
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
