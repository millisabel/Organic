export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  backgroundColor?: string;
  backgroundImageUrl?: string;
  backgroundPosition?: string;
  backgroundSize?: string;
  paddingY?: string;
  children?: React.ReactNode;
  className?: string;
  container?: boolean;
  dataComponent?: string;
}
