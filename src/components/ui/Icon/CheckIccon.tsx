import Icon from '@/components/ui/Icon';

const CheckIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon {...props} data-component="CheckIcon">
    <path
      fillRule="evenodd"
      d="M16.707 6.293a1 1 0 010 1.414l-6.364 6.364a1 1 0 01-1.414 0l-3.182-3.182a1 1 0 111.414-1.414l2.475 2.475 5.657-5.657a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </Icon>
);

export default CheckIcon;
