import HeroSection from '@/components/sections/HeroSection';
import heroImage from '@/assets/images/backgrounds/hero_team.webp';
import TeamSection from '@/components/sections/TeamSection';

const TeamPage = () => {
  return (
    <>
      <HeroSection id="hero" variant="banner" title="Our Team" backgroundImageUrl={heroImage} />
      <TeamSection
        title="Our Team"
        subtitle="Meet the team"
        isButton={false}
        className="gap-y-10"
      />
    </>
  );
};

export default TeamPage;
