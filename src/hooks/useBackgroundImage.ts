import { useEffect, useState } from 'react';

export const useBackgroundImage = (imageUrl?: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!imageUrl) return;

    const img = new Image();
    img.onload = () => setIsLoaded(true);
    img.src = imageUrl;
  }, [imageUrl]);

  return { isLoaded };
};
