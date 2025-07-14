import SocialButton from './SocialButton';

export default {
  title: 'Shared/Button/SocialButton',
  component: SocialButton,
};

export const facebook = () => <SocialButton type="facebook" href="https://www.facebook.com" />;
export const instagram = () => <SocialButton type="instagram" href="https://www.instagram.com" />;
export const twitter = () => <SocialButton type="twitter" href="https://www.twitter.com" />;
export const pinterest = () => <SocialButton type="pinterest" href="https://www.pinterest.com" />;
export const facebookWithCustomClass = () => (
  <SocialButton
    type="facebook"
    href="https://www.facebook.com"
    className="text-red-500 bg-primary"
  />
);
