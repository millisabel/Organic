export interface FastItemProps {
  value: string;
  label: string;
}

export interface FastItemData {
  id: number;
  value: string;
  label: string;
  [key: string]: unknown;
}
