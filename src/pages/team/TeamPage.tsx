import HeroSection from '@/components/sections/HeroSection';
import Section from '@/components/layout/Section/Section';
import UiList from '@/components/patterns/UiList';
import TeamCard from '@/components/shared/Card/TeamCard';
import teams from '@/data/teams.json';
import heroImage from '@/assets/images/backgrounds/hero_team.webp';

const TeamPage = () => {
  return (
    <>
      <HeroSection id="hero" variant="banner" title="Our Team" backgroundImageUrl={heroImage} />
      <Section>
        <UiList
          variant="gridCol_lg_3"
          items={teams}
          renderItem={(item, idx) => <TeamCard key={idx} data={item} />}
          className="gap-y-10"
        />
      </Section>
    </>
  );
};

export default TeamPage;
