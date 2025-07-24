import type { RootState } from '@/store/store';

export const selectSearchQuery = (state: RootState) => state.search.query;
export const selectIsSearching = (state: RootState) => state.search.isSearching;
export const selectSearchHistory = (state: RootState) => state.search.searchHistory;
export const selectSuggestions = (state: RootState) => state.search.suggestions;
export const selectHasSearchQuery = (state: RootState) => state.search.query.trim().length > 0;
