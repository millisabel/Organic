import DateDisplay from './DateDisplay';

export default {
  title: 'Other/Components/Shared/Post/DateDisplay',
  component: DateDisplay,
};

export const Default = () => <DateDisplay date={new Date()} />;
export const Short = () => <DateDisplay date={new Date()} format="short" />;
export const Long = () => <DateDisplay date={new Date()} format="long" />;
