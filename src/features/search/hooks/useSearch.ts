import { addToHistory, selectSearchQuery, setQuery } from '@/features/search/model';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSearch = () => {
  const dispatch = useAppDispatch();
  const searchQuery = useAppSelector(selectSearchQuery);
  const [searchValue, setSearchValue] = useState(searchQuery);
  const navigate = useNavigate();

  const handleSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
      dispatch(setQuery(value));
      dispatch(addToHistory(value));
      navigate(`/shop?search=${encodeURIComponent(value)}`);
    },
    [navigate, dispatch],
  );

  return { handleSearch, searchValue };
};
