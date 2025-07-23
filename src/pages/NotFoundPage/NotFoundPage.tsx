import hero_img from '@/assets/images/backgrounds/page_not_funden.webp';
import NotFoundenSection from '@/components/sections/NotFoundenSection';

const NotFoundPage = () => {
  return (
    <NotFoundenSection
      title="404"
      subtitle="Page not found"
      text="The page you are looking for doesn't exist or has been moved"
      backgroundImageUrl={hero_img}
      className="min-h-screen"
    />
  );
};

export default NotFoundPage;
