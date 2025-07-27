export interface InfoBlockProps {
  item: FeatureDataProps;
  className?: string;
}

export interface FeatureDataProps {
  icon: string;
  title: string;
  description: string;
  iconSize?: {
    width: number;
    height: number;
  };
}
