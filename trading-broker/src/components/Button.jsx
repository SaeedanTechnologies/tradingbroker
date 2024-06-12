import Loader from "./Loader";

const Button = ({ children, className, isLoading, ...rest }) => {
  return (
    <button className={`btn btn-active  ${className}`} {...rest}>
      {isLoading && <Loader />}
      {children}
    </button>
  );
};

export default Button;
