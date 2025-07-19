import SocialButton from './SocialButton';
import type { SocialButtonProps } from './types';

export default {
  title: 'Components/Button/Shared/SocialButton',
  component: SocialButton,
  parameters: {
    docs: {
      description: {
        component: 'src/components/shared/Button/SocialButton/SocialButton.tsx',
      },
      toc: true,
    },
  },
  argTypes: {
    socialType: {
      control: 'select',
      options: ['facebook', 'instagram', 'twitter', 'pinterest'],
      table: {
        type: { summary: 'string' },
      },
    },
    href: {
      control: 'text',
      table: {
        control: false,
        type: { summary: 'string' },
        category: 'System',
      },
    },
    children: {
      control: false,
      table: {
        type: { summary: 'string' },
        category: 'Content',
        detail: 'Icon Social',
        defaultValue: { summary: 'Icon Social' },
      },
    },
    asChild: {
      control: false,
      table: {
        type: { summary: 'boolean' },
        category: 'System',
        defaultValue: { summary: 'true' },
      },
    },
    nameComponent: {
      control: false,
      table: {
        type: { summary: 'string' },
        category: 'System',
        defaultValue: { summary: 'SocialButton' },
      },
    },
  },
};

export const Default = (args: SocialButtonProps) => <SocialButton {...args} />;
Default.args = {
  socialType: 'facebook',
  href: 'https://www.facebook.com',
};

export const ButtonFacebook = () => (
  <SocialButton socialType="facebook" href="https://www.facebook.com" />
);
export const ButtonInstagram = () => (
  <SocialButton socialType="instagram" href="https://www.instagram.com" />
);
export const ButtonTwitter = () => (
  <SocialButton socialType="twitter" href="https://www.twitter.com" />
);
export const ButtonPinterest = () => (
  <SocialButton socialType="pinterest" href="https://www.pinterest.com" />
);
export const ButtonFacebookWithCustomClass = () => (
  <SocialButton
    socialType="facebook"
    href="https://www.facebook.com"
    className="text-red-500 bg-primary"
  />
);
