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
        We are committed to providing the highest quality organic products while supporting
        sustainable farming practices and promoting a healthier lifestyle for our customers and the
        planet.
      </Paragraph>
      <UIList
        variant="flexCol"
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
