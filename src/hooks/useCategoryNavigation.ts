import { useNavigate } from 'react-router-dom';

/**
 * Hook for category navigation functionality
 * @returns Function to navigate to shop with category filter
 */
export const useCategoryNavigation = () => {
  const navigate = useNavigate();

  const navigateToCategory = (category: string) => {
    navigate(`/shop?category=${category}`);
  };

  return { navigateToCategory };
};
