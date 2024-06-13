import Loader from "./Loader";

const Button = ({ children, className, isLoading, ...rest }) => {
  return (
    <button
      className={`btn btn-active flex items-center gap-3 text-md ${className}`}
      {...rest}
    >
      {isLoading ? <Loader /> : children}
    </button>
  );
};

export default Button;
