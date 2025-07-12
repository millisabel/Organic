import GalleryCard from '@/components/ui/Card/GalleryCard';
import CardList from '../shared/CardList';
import galleryData from '@/data/gallery.json';

const GallerySection: React.FC = () => {
  return (
    <section className="w-full py-40 bg-secondary-light">
      <CardList variant="gallery" items={galleryData.items} CardComponent={GalleryCard} />
    </section>
  );
};

export default GallerySection;
