import heroImage from '@/assets/images/backgrounds/hero_bg_page_about.webp';
import CategoryCard, { type ICategory } from '@/components/shared/CategoryCard';
import HeroSection from '@/components/shared/HeroSection';
import Section from '@/components/shared/Section';
import SectionHeader from '@/components/shared/SectionHeader';
import categoriesData from '@/data/categories.json';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <>
      <HeroSection variant="banner" title="About Us" bgImage={heroImage} />

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
