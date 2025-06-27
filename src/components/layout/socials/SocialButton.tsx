import { Button } from '@/components/ui/Button';

interface SocialButtonProps {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const SocialButton = ({ href, label, icon }: SocialButtonProps) => (
  <Button variant="social" size="round" asChild>
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon}
    </a>
  </Button>
);

export default SocialButton;
