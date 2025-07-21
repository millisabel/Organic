import type { CardProps } from '../../../ui/Card/types';

export interface TeamMemberData {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: { facebook?: string; instagram?: string; twitter?: string };
}

export interface TeamCardProps extends CardProps {
  data: TeamMemberData;
}
