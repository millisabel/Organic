import Icon from '@/components/ui/Icon';

const CloseIcon = (props: React.ComponentProps<typeof Icon>) => {
  return (
    <Icon {...props} data-component="CloseIcon">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </Icon>
  );
};

export default CloseIcon;
