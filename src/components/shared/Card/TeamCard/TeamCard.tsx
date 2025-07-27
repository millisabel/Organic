import UIList from '@/components/patterns/UiList';
import type { AdditionalProps } from '@/components/patterns/UiList/types';
import SocialButton, { type SocialType } from '@/components/shared/Button/SocialButton';
import Card from '@/components/ui/Card';
import CardContent from '@/components/ui/Card/components/CardContent';
import CardFooter from '@/components/ui/Card/components/CardFooter';
import CardHeader from '@/components/ui/Card/components/CardHeader';
import Image from '@/components/ui/Image';
import Title from '@/components/ui/Typography/Title';
import type { TeamCardProps } from './types';
import { cn } from '@/utils/helpers';

const TeamCard = ({ data, className }: TeamCardProps) => {
  const { name, role, image, socials, imageSize } = data;
  const socialItems = Object.entries(socials).map(([socialType, href]) => ({
    socialType: socialType as SocialType,
    href,
  }));

  const renderSocialButton = (
    item: { socialType: SocialType; href: string },
    idx: number,
    additionalProps?: AdditionalProps,
  ) => <SocialButton key={idx} {...item} {...additionalProps} />;

  return (
    <Card
      variant="default"
      nameComponent="TeamCard"
      className={cn('max-w-[450px] min-h-[500px]', className)}
    >
      <CardHeader className="h-full">
        <Image
          src={image}
          alt={name}
          folder="teams"
          width={imageSize?.width || 450}
          height={imageSize?.height || 485}
        />
      </CardHeader>
      <div className="flex flex-row justify-between py-9 px-7">
        <CardContent className="items-start mb-10">
          <Title variant="cardTitle" level={3} className="text-2xl">
            {name}
          </Title>
          <Title variant="sectionSubTitle" level={4} className="text-xl md:text-2xl">
            {role}
          </Title>
        </CardContent>
        <CardFooter className="self-end">
          <UIList
            items={socialItems}
            renderItem={renderSocialButton}
            className="flex flex-row gap-1"
            variant="flexCol"
          />
        </CardFooter>
      </div>
    </Card>
  );
};

export default TeamCard;
