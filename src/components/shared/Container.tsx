interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = '' }: ContainerProps) => {
  return (
    <div className={`w-screen ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </div>
  );
};

export default Container;
