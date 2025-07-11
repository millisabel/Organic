import SocialButtonsList from '@/components/ui/Button/SocialButton';
import type { CardProps } from '.';
import Card from '.';

export interface TeamMemberData {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: { facebook?: string; instagram?: string; twitter?: string };
}

interface TeamCardProps extends CardProps {
  data: TeamMemberData;
}

const TeamCard = ({ data }: TeamCardProps) => {
  return (
    <Card
      cardProps={{
        variant: 'team',
        size: 'team',
      }}
      imgProps={{
        name: data.image,
        folder: 'teams',
        size: 'default',
        rounded: 'top',
      }}
    >
      <div className="flex flex-row gap-4 justify-between py-8 px-6 bg-background">
        <div className="self-start flex flex-col gap-1 mb-6">
          <h3 className="text-xl font-bold text-primary">{data.name}</h3>
          <p className="text-sm text-secondary font-yellowtail">{data.role}</p>
        </div>
        <SocialButtonsList
          socials={data.socials}
          variant="socialNoBg"
          size="roundSmall"
          className="self-end gap-0"
        />
      </div>
    </Card>
  );
};

export default TeamCard;
