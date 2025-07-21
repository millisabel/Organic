import GalleryCard from '@/components/shared/Card/GalleryCard';
import galleryData from '@/data/gallery.json';
import UiList from '../patterns/UiList';

const GallerySection: React.FC = () => {
  return (
    <section className="w-full py-40 bg-secondary-light">
      <UiList
        variant="grid"
        items={galleryData.items}
        renderItem={(item, idx) => <GalleryCard key={idx} data={item} />}
      />
    </section>
  );
};

export default GallerySection;
