import Section from '@/components/layout/sectionLayouts/Section';
import SectionHeader from '@/components/layout/sectionLayouts/SectionHeader';
import AboutSection from '@/components/sections/AboutSection';
import HeroSection from '@/components/sections/HeroSection';
import CategoryCard, { type ICategory } from '@/components/ui/Card/CategoryCard';
import ArrowIcon from '@/components/ui/Icon/ArrowIcon';
import categoriesData from '@/data/categories.json';
import { Link } from 'react-router-dom';

import about_section_image from '@/assets/images/backgrounds/about_about.webp';
import heroImage from '@/assets/images/backgrounds/hero_about.webp';
import CardList from '@/components/shared/CardList';
import TeamCard from '@/components/ui/Card/TeamCard';
import { features } from '@/data/featuresAboutAbout.json';
import teams from '@/data/teams.json';

const AboutPage = () => {
  return (
    <>
      <HeroSection variant="banner" title="About Us" bgImage={heroImage} />
      <AboutSection
        image={{ src: about_section_image, alt: 'About Section Image' }}
        title="We do Creative Things for Success"
        subtitle="About Us"
        description={[
          "Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
          " Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.",
        ]}
        button={{ text: 'Shop Now', icon: <ArrowIcon variant="arrow" size="md" /> }}
        className="bg-background"
        features={features}
      />

      <CardList
        items={teams}
        CardComponent={TeamCard}
        getKey={(_, index) => index}
        getCardProps={(item) => ({ data: item })}
        itemsDisplay={3}
      />

      <Section className="bg-primary text-white py-[190px]">
        <SectionHeader title="What We Offer for You" subtitle="About Us" titleColor="text-white" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {(categoriesData as ICategory[]).map((category) => (
            <Link key={category.id} to={`/shop?category=${category.name}`}>
              <CategoryCard category={category} variant="secondary" />
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
};

export default AboutPage;
