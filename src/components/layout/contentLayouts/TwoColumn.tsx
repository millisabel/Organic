interface ITwoColumnProps {
  image?: string;
  children?: React.ReactNode;
  className?: string;
}

const TwoColumn: React.FC<ITwoColumnProps> = ({ children, image, className }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center ${className}`}
      data-component="TwoColumnSection"
    >
      <div className="w-1/2 lg:w-1/2 flex justify-center lg:justify-end lg:pr-12 mb-8 lg:mb-0">
        <img src={image} alt="Two Column Section" />
      </div>
      <div className="w-1/2">{children}</div>
    </div>
  );
};

export default TwoColumn;
