import Input from '@/components/ui/Form/Input';
import Label from '@/components/ui/Form/Label';
import { cn } from '@/utils/helpers';
import { forwardRef } from 'react';
import type { SearchInputProps } from '.';

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ className, id, ...props }, ref) => {
    return (
      <div className={cn(className, 'relative')}>
        <Label variant="hidden" htmlFor={id}>
          Search
        </Label>
        <Input type="search" variant="search" placeholder="Search" id={id} ref={ref} {...props} />
      </div>
    );
  },
);

export default SearchInput;
