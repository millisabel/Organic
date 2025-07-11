const GalleryCard = ({ title, image }: { title: string; image: string }) => (
  <div className="relative w-full rounded-lg overflow-hidden group" tabIndex={0} aria-label={title}>
    <img src={image} alt={title} className="object-cover w-full h-full" />
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="bg-white bg-opacity-90 rounded-lg px-6 py-3 text-lg font-semibold shadow">
        {title}
      </span>
    </div>
  </div>
);

export default GalleryCard;
