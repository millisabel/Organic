export interface SectionHeaderSlots {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
}

export interface SectionHeaderProps {
  title?: string;
  subtitle?: string;
  className?: string;
  slots?: SectionHeaderSlots;
}
