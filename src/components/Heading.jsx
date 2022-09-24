const Heading = ({ num, children }) => {
  return (
    <div className="">
      <h1 className="text-4xl mr-4 font-bold">
        <span className="font-mono text-primary">{num}.</span> {children}
      </h1>
      <div className="h-0.5 w-full bg-primary"></div>
    </div>
  );
};
export default Heading;
