import SearchButton from './SearchButton';
import type { SearchButtonProps } from './types';

export default {
  title: 'Components/Button/Extended/SearchButton',
  component: SearchButton,
  parameters: {
    docs: {
      description: {
        component: 'features/search/components/SearchButton/SearchButton.tsx',
        story: 'inherited from Button',
      },
    },
  },
};

export const Template = (args: SearchButtonProps) => <SearchButton {...args} />;

Template.args = {
  // eslint-disable-next-line no-console
  onClick: () => console.log('Search clicked'),
  'aria-label': 'Search',
  variant: 'default',
  size: 'circle',
};
