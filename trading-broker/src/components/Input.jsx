import Text from "./Text";

const Input = ({ errorMessage, className, placeholder, type, ...rest }) => {
  return (
    <div className="flex flex-col">
      <input
        type={type}
        placeholder={placeholder}
        className={`input input-bordered w-full autofill:!bg-white ${className} ${
          errorMessage && "input-error"
        }`}
        {...rest}
      />
      {errorMessage && (
        <Text className="mt-1 text-xs italic font-normal pl-4 text-error">
          *{errorMessage}
        </Text>
      )}
    </div>
  );
};

export default Input;
