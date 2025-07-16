import MenuButton from './MenuButton';

export default {
  title: 'Button/Components/Shared/Button/MenuButton',
  component: MenuButton,
};

export const MenuClose = () => <MenuButton isOpen={false} onClick={() => {}} />;

export const MenuOpen = () => <MenuButton isOpen={true} onClick={() => {}} />;
