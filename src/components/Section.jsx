export const Section = ({ title, children }) => {
  return (
    <div className="container">
      <h1> {title}</h1>
      {children}
    </div>
  );
};
