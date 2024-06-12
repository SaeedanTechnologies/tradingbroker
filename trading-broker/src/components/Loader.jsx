const Loader = ({ className, ...rest }) => {
  return <span className={`${className} loading loading-spinner`}></span>;
};

export default Loader;
