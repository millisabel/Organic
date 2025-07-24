import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { SearchState } from './types';

const initialState: SearchState = {
  query: '',
  isSearching: false,
  searchHistory: [],
  suggestions: [],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setIsSearching: (state, action: PayloadAction<boolean>) => {
      state.isSearching = action.payload;
    },
    addToHistory: (state, action: PayloadAction<string>) => {
      const query = action.payload.trim();
      if (query && !state.searchHistory.includes(query)) {
        state.searchHistory.unshift(query);
        // Ограничиваем историю 10 запросами
        if (state.searchHistory.length > 10) {
          state.searchHistory = state.searchHistory.slice(0, 10);
        }
      }
    },
    clearHistory: (state) => {
      state.searchHistory = [];
    },
    setSuggestions: (state, action: PayloadAction<string[]>) => {
      state.suggestions = action.payload;
    },
    clearSuggestions: (state) => {
      state.suggestions = [];
    },
  },
});

export const {
  setQuery,
  setIsSearching,
  addToHistory,
  clearHistory,
  setSuggestions,
  clearSuggestions,
} = searchSlice.actions;

export default searchSlice.reducer;
