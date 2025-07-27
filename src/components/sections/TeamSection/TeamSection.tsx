import { Link } from 'react-router-dom';
import Section from '@/components/layout/Section';
import UiList from '@/components/patterns/UiList';
import TeamCard from '@/components/shared/Card/TeamCard';
import SectionHeader from '@/components/layout/Section/SectionHeader';
import { Paragraph } from '@/components/ui/Typography';
import Button from '@/components/ui/Button';
import ArrowIcon from '@/components/shared/Icon/ArrowIcon';
import teams from '@/data/teams.json';
import type { TeamSectionProps } from './types';
import { useScrollToElement } from '@/hooks';

const TeamSection = ({
  title,
  subtitle,
  description,
  isButton = true,
  itemsDisplay,
}: TeamSectionProps) => {
  const { scrollToElement } = useScrollToElement({ delay: 300 });
  const handleClick = () => {
    scrollToElement('[id="team"]');
  };
  return (
    <Section id="team" dataComponent="TeamSection">
      <SectionHeader title={title} subtitle={subtitle} className="text-center" />
      <Paragraph className="text-center w-full sm:w-1/2 mx-auto mb-10" children={description} />
      <UiList
        variant="gridCol_lg_3"
        align="center"
        items={teams}
        renderItem={(item, idx) => <TeamCard key={idx} data={item} className="mx-auto" />}
        itemsDisplay={itemsDisplay}
        className="mb-20 mx-auto"
      />
      {isButton && (
        <Button asChild variant="default" size="default" className="mx-auto" onClick={handleClick}>
          <Link to="/team">
            Out Team{' '}
            <ArrowIcon className="w-4 h-4" direction="right" variant="default" size="default" />
          </Link>
        </Button>
      )}
    </Section>
  );
};

export default TeamSection;
