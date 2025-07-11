import teams from '@/data/teams.json';
import Section from '../layout/sectionLayouts/Section';
import SectionHeader from '../layout/sectionLayouts/SectionHeader';
import CardList from '../shared/CardList';
import TeamCard from '../ui/Card/TeamCard/TeamCard';

interface TeamSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

const TeamSection = ({ title, subtitle, description }: TeamSectionProps) => {
  return (
    <Section>
      <SectionHeader title={title} subtitle={subtitle} />
      <p className="text-center w-full sm:w-1/2 mx-auto mb-10">{description}</p>
      <CardList
        items={teams}
        CardComponent={TeamCard}
        getKey={(_, index) => index}
        getCardProps={(item) => ({ data: item })}
        itemsDisplay={3}
      />
    </Section>
  );
};

export default TeamSection;
