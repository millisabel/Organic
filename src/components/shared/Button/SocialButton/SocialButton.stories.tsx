import { createArgTypesFromArray, getStoryDescription } from '@/utils/storiesHelpers';
import SocialButton from './SocialButton';
import type { SocialButtonProps } from './types';

const customProps = createArgTypesFromArray([
  {
    name: 'socialType',
    type: 'string',
    control: 'select',
    options: ['facebook', 'instagram', 'twitter', 'pinterest'],
  },
  {
    name: 'href',
    type: 'string',
    control: false,
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    control: false,
    defaultValue: 'Icon Social',
    category: 'Parent Props',
  },
  {
    name: 'className',
    type: 'string',
    control: 'text',
    category: 'Parent Props',
  },
  {
    name: 'asChild',
    type: 'boolean',
    control: false,
    category: 'Parent Props',
  },
  {
    name: 'nameComponent',
    type: 'string',
    control: false,
    defaultValue: 'SocialButton',
    category: 'Parent Props',
  },
]);

export default {
  title: 'Components/Button/Extended/SocialButton',
  component: SocialButton,
  parameters: {
    docs: {
      description: {
        component: getStoryDescription({
          inheritFrom: 'Button',
          source: 'src/components/shared/Button/SocialButton/SocialButton.tsx',
        }),
      },
    },
  },
  argTypes: customProps,
  //   socialType: {
  //     control: 'select',
  //     options: ['facebook', 'instagram', 'twitter', 'pinterest'],
  //     table: {
  //       type: { summary: 'string' },
  //     },
  //   },
  //   href: {
  //     control: 'text',
  //     table: {
  //       control: false,
  //       type: { summary: 'string' },
  //       category: 'System',
  //     },
  //   },
  //   children: {
  //     control: false,
  //     table: {
  //       type: { summary: 'string' },
  //       category: 'Content',
  //       detail: 'Icon Social',
  //       defaultValue: { summary: 'Icon Social' },
  //     },
  //   },
  //   asChild: {
  //     control: false,
  //     table: {
  //       type: { summary: 'boolean' },
  //       category: 'System',
  //       defaultValue: { summary: 'true' },
  //     },
  //   },
  //   nameComponent: {
  //     control: false,
  //     table: {
  //       type: { summary: 'string' },
  //       category: 'System',
  //       defaultValue: { summary: 'SocialButton' },
  //     },
  //   },
};

export const Template = (args: SocialButtonProps) => <SocialButton {...args} />;
Template.args = {
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
