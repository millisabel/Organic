import type { FastItemProps } from './types';

const FastItem = ({ value, label }: FastItemProps) => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center max-w-[200px] max-h-[200px] aspect-square mx-auto rounded-full p-4 border-secondary border-solid border-[4px] shadow-[0_0_0_4px_text-primary] text-primary bg-[#F1F1F1]"
      data-component="FastItem"
    >
      <h3 className="text-5xl font-bold">{value}</h3>
      <p className="text-base font-opensans">{label}</p>
    </div>
  );
};

export default FastItem;
