interface FastItemProps {
  value: string;
  label: string;
}

const FastItem = ({ value, label }: FastItemProps) => {
  return (
    <div
      className="flex flex-col gap-4 items-center justify-center w-[200px] h-[200px] mx-auto rounded-full p-4 border-secondary border-solid border-[4px] shadow-[0_0_0_4px_text-primary] text-primary bg-[#F1F1F1]"
      data-component="FastItem"
    >
      <h3 className="text-5xl font-bold">{value}</h3>
      <p className="text-base font-opensans">{label}</p>
    </div>
  );
};

export default FastItem;
