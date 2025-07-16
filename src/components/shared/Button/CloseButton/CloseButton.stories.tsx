import CloseButton from '@/components/shared/Button/CloseButton/CloseButton';

export default {
  title: 'Button/Components/Shared/Button/CloseButton',
  component: CloseButton,
};

export const CloseButtonDefault = () => (
  <div className="relative p-4">
    <CloseButton onClick={() => {}} />
  </div>
);
