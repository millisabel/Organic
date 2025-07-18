export interface IntroData {
  title: string;
  description: string;
  author: string;
  date: string;
}

export interface IntroProps {
  post: IntroData;
  className?: string;
}
