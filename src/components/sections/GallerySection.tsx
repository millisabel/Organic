import GalleryCard from '@/components/ui/Card/GalleryCard';
import CardList from '../shared/CardList';

const GALLERY_ITEMS = [
  { title: 'Organic Juice', image: 'gallery_center.webp' },
  { title: 'Organic Food', image: 'gallery_left.webp' },
  { title: 'Nuts Cookies', image: 'gallery_right.webp' },
];

const GallerySection = () => {
  return (
    <section className="w-full py-40 bg-secondary-light">
      <CardList
        variant="gallery"
        items={GALLERY_ITEMS}
        CardComponent={GalleryCard}
        getKey={(item) => item.title}
        getCardProps={(item) => ({ title: item.title, image: item.image })}
      />
    </section>
  );
};

export default GallerySection;
