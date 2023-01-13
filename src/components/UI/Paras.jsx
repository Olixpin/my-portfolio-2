const Paras = ({ title, mainTitle }) => {
  return (
    <div className="dark:text-background">
      <p className="leading-8 text">{title}</p>
      {mainTitle && (
        <h1 className="text-5xl max-[425px]:text-4xl  font-medium">
          {mainTitle}
        </h1>
      )}
    </div>
  );
};

export default Paras;
