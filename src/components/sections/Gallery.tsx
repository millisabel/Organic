import gallery_center from '@/assets/images/backgrounds/gallery_center_home.webp';
import gallery_left from '@/assets/images/backgrounds/gallery_left_home.webp';
import gallery_right from '@/assets/images/backgrounds/gallery_right_home.webp';
import GalleryCard from '@/components/ui/Card/GalleryCard/GalleryCard';

const categories = [
  { title: 'Organic Juice', image: gallery_center },
  { title: 'Organic Food', image: gallery_left },
  { title: 'Nuts Cookies', image: gallery_right },
];

const Gallery = () => {
  return (
    <section className="w-full py-40 bg-secondary-light">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((category) => (
          <GalleryCard key={category.title} title={category.title} image={category.image} />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
