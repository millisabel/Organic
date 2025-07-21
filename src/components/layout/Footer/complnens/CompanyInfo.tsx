import Logo from '@/components/ui/Logo';
import Paragraph from '@/components/ui/Typography/Paragraph';
import UIList from '@/components/patterns/UiList';
import SocialButton from '@/components/shared/Button/SocialButton/SocialButton';
import type { SocialButtonProps } from '@/components/shared/Button/SocialButton/types';

interface CompanyInfoProps {
  className?: string;
}

const SOCIALS_FOOTER = [
  {
    id: 1,
    socialType: 'facebook',
    href: 'https://facebook.com/',
  },
  {
    id: 2,
    socialType: 'instagram',
    href: 'https://instagram.com/',
  },
  {
    id: 3,
    socialType: 'twitter',
    href: 'https://www.twitter.com',
  },
  {
    id: 4,
    socialType: 'pinterest',
    href: 'https://www.pinterest.com',
  },
];

const CompanyInfo = ({ className }: CompanyInfoProps) => {
  return (
    <div className={className}>
      <Logo />
      <Paragraph className="my-6 text-center text-text">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of
        the printing.
      </Paragraph>
      <UIList
        className="flex flex-row gap-2"
        items={SOCIALS_FOOTER as unknown as SocialButtonProps[]}
        renderItem={(item) => (
          <SocialButton
            key={item.id}
            socialType={item.socialType}
            href={item.href}
            variant="social"
          />
        )}
      />
    </div>
  );
};

export default CompanyInfo;

{
  /* <div className="flex flex-col items-center border-x-0 border-b-2 border-t-2 border-border px-8 py-8 lg:border-x-2 lg:border-y-0 lg:py-0">
              <Logo />
              <p className="my-6 text-center text-text-light">
                Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
                text of the printing.
              </p>
              <SocialButtonsList socials={SOCIALS_FOOTER} />
            </div> */
}
