import SocialButton from './SocialButton';

export default {
  title: 'Shared/Button/SocialButton',
  component: SocialButton,
};

export const ButtonFacebook = () => (
  <SocialButton type="facebook" href="https://www.facebook.com" />
);
export const ButtonInstagram = () => (
  <SocialButton type="instagram" href="https://www.instagram.com" />
);
export const ButtonTwitter = () => <SocialButton type="twitter" href="https://www.twitter.com" />;
export const ButtonPinterest = () => (
  <SocialButton type="pinterest" href="https://www.pinterest.com" />
);
export const ButtonFacebookWithCustomClass = () => (
  <SocialButton
    type="facebook"
    href="https://www.facebook.com"
    className="text-red-500 bg-primary"
  />
);
