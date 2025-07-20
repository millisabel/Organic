import UserIcon from '@/components/shared/Icon/UserIcon';
import AuthorDisplay from './AuthorDisplay';
import { getStoryDescription } from '@/utils/storiesHelpers';

export default {
  title: 'Shared/Post/AuthorDisplay',
  component: AuthorDisplay,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          source: 'src/components/shared/Post/AuthorDisplay/AuthorDisplay.stories.tsx',
        }),
      },
    },
  },
  argTypes: {
    author: { control: 'text' },
    label: { control: 'text' },
    icon: { control: false },
    className: { control: 'text' },
  },
};

export const Template = (arg: React.ComponentProps<typeof AuthorDisplay>) => (
  <AuthorDisplay {...arg} />
);
Template.args = {
  author: 'John Doe',
  label: 'Author',
  icon: <UserIcon size="sm" className="text-primary" />,
};

export const WithSecondaryIcon = () => (
  <AuthorDisplay author="John Doe" icon={<UserIcon size="sm" className="text-secondary" />} />
);
export const WithPrimaryIcon = () => (
  <AuthorDisplay author="Jane Smith" icon={<UserIcon size="sm" className="text-primary" />} />
);
export const WithCustomIcon = () => (
  <AuthorDisplay author="Bob Wilson" icon={<UserIcon size="sm" className="text-red-500" />} />
);
export const WithCustomTextColor = () => (
  <AuthorDisplay
    author="Alice Brown"
    icon={<UserIcon size="sm" className="text-blue-600" />}
    className="text-green-700"
  />
);
