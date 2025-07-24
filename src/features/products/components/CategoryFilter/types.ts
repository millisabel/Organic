export type CategoryOption = string;

export interface CategoryFilterProps {
  selectedCategory: CategoryOption;
  onCategoryChange: (category: CategoryOption) => void;
  className?: string;
}
