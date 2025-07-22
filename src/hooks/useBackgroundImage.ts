import { useEffect, useState } from 'react';

export const useBackgroundImage = (imageUrl?: string) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!imageUrl) return;

    setIsLoaded(false);
    setHasError(false);

    const img = new Image();

    img.onload = () => {
      setIsLoaded(true);
      setHasError(false);
    };

    img.onerror = () => {
      setIsLoaded(false);
      setHasError(true);
    };

    img.src = imageUrl;
  }, [imageUrl]);

  return { isLoaded, hasError };
};
