import UIList from '@/components/patterns/UiList';
import SocialButton from '@/components/shared/Button/SocialButton/SocialButton';
import Logo from '@/components/ui/Logo';
import Paragraph from '@/components/ui/Typography/Paragraph';
import { useContactData } from '@/hooks/useContactData';

interface CompanyInfoProps {
  className?: string;
}

const CompanyInfo = ({ className }: CompanyInfoProps) => {
  const { socialLinks } = useContactData();

  return (
    <div className={className}>
      <Logo />
      <Paragraph className="my-6 text-center text-text">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy text of
        the printing.
      </Paragraph>
      <UIList
        as="ul"
        className="flex flex-row gap-2"
        items={socialLinks}
        renderItem={(item) => (
          <SocialButton socialType={item.socialType} href={item.href} variant="social" />
        )}
      />
    </div>
  );
};

export default CompanyInfo;
