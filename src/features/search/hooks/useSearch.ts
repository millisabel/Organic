// import { debounce } from '@/utils/helpers';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = useCallback(
    (value: string) => {
      setSearchValue(value);
      navigate(`/shop?search=${encodeURIComponent(value)}`);
    },
    [navigate],
  );

  return { handleSearch, searchValue };
};
