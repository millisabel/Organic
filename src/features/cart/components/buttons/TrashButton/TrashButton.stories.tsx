import TrashButton from './TrashButton';

export default {
  title: 'Components/Button/Extended/TrashButton',
  component: TrashButton,
};

export const TrashButtonDefault = () => <TrashButton handleRemove={() => {}} />;
