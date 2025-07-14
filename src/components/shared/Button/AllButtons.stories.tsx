import MenuButton from './MenuButton/MenuButton';
import CloseButton from './CloseButton/CloseButton';
import SocialButton from './SocialButton/SocialButton';

export default {
  title: 'Shared/Button/AllButtons',
};

export const Gallery = () => (
  <div className="flex flex-col gap-4">
    <MenuButton isOpen={false} onClick={() => {}} />
    <CloseButton onClick={() => {}} />
    <SocialButton type="facebook" href="https://facebook.com" />
    <SocialButton type="instagram" href="https://www.instagram.com" />
    <SocialButton type="twitter" href="https://www.twitter.com" />
    <SocialButton type="pinterest" href="https://www.pinterest.com" />
    <SocialButton
      type="facebook"
      href="https://www.facebook.com"
      className="text-red-500 bg-primary"
    />
  </div>
);
