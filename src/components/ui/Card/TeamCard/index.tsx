import SocialButtonsList from '@/components/ui/Button/SocialButton';
import Card from '@/components/ui/Card';
import type { TeamCardProps } from './types';

const TeamCard = ({ data }: TeamCardProps) => {
  return (
    <Card
      variant="team"
      imgProps={{
        name: data.image,
        folder: 'teams',
      }}
      data-component="TeamCard"
    >
      <div className="self-start flex flex-col gap-1 mb-6">
        <h3 className="text-xl font-bold text-primary">{data.name}</h3>
        <p className="text-sm text-secondary font-yellowtail">{data.role}</p>
      </div>
      <SocialButtonsList
        socials={data.socials}
        variant="socialNoBg"
        size="roundSmall"
        className="self-end gap-0 sha"
      />
    </Card>
  );
};

export default TeamCard;
