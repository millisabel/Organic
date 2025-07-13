import { cn } from '@/utils/helpers';
import type { ProductImageBlockProps } from '../types';

const defaultClassesParent = 'relative overflow-hidden flex items-center justify-center';
const defaultClassesImage =
  'will-change-contents h-full mx-auto object-cover transition-all duration-300 group-hover:scale-110 drop-shadow-xl';

const ProductImageBlock: React.FC<ProductImageBlockProps> = ({
  imageUrl,
  name,
  classNameParent = '',
  classNameImage = '',
}) => (
  <div className={cn(defaultClassesParent, classNameParent)}>
    <img src={imageUrl} alt={name} className={cn(defaultClassesImage, classNameImage)} />
  </div>
);

export default ProductImageBlock;
