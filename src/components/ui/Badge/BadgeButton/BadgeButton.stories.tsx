import { BadgeButton } from '.';

export default {
  title: 'UI/Badge/BadgeButton',
  component: BadgeButton,
};

export const BadgeButtonDefault = () => (
  <BadgeButton category="Category" handleCategoryClick={() => {}} />
);
