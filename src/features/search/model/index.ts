// Redux slice
export {
  addToHistory,
  clearHistory,
  clearSuggestions,
  default as searchReducer,
  setIsSearching,
  setQuery,
  setSuggestions,
} from './searchSlice';

// Types
export type { SearchResult, SearchState } from './types';

// Selectors
export {
  selectHasSearchQuery,
  selectIsSearching,
  selectSearchHistory,
  selectSearchQuery,
  selectSuggestions,
} from './selectors';
