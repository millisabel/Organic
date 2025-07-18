import UserIcon from '@/components/shared/Icon/UserIcon';
import AuthorDisplay from './AuthorDisplay';

export default {
  title: 'Typography/Components/Shared/Post/AuthorDisplay',
  component: AuthorDisplay,
};

export const Default = () => <AuthorDisplay author="John Doe" />;
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
