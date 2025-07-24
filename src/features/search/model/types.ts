export interface SearchState {
  query: string;
  isSearching: boolean;
  searchHistory: string[];
  suggestions: string[];
}

export interface SearchResult {
  id: string | number;
  title: string;
  type: 'product' | 'category';
  url: string;
}
