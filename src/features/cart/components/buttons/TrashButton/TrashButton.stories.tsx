import TrashButton from './TrashButton';

export default {
  title: 'Features/Cart/TrashButton',
  component: TrashButton,
};

export const TrashButtonDefault = () => <TrashButton handleRemove={() => {}} />;
