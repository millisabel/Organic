import { getStoryDescription } from '@/utils/storiesHelpers';
import SearchButton from './SearchButton';

export default {
  title: 'Components/Button/Extended/SearchButton',
  component: SearchButton,
  parameters: {
    controls: {
      exclude: ['nameComponent', 'asChild', 'className', 'children'],
    },
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/features/search/components/SearchButton/SearchButton.tsx',
        }),
      },
    },
  },
};

export const Template = () => <SearchButton />;
