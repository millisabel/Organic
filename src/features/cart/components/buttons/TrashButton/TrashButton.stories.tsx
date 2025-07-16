import TrashButton from './TrashButton';

export default {
  title: 'Button/Features/Cart/Buttons/TrashButton',
  component: TrashButton,
};

export const TrashButtonDefault = () => <TrashButton handleRemove={() => {}} />;
