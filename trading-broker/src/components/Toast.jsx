import { toast } from "react-toastify";

const Toast = ({ variant, message }) => {
  // debugger;
  switch (variant) {
    case "success":
      toast.success(message, {
        position: "top-right",
        className: "foo-bar",
        autoClose: 2000,
        pauseOnHover: false,
      });
      break;
    case "error":
      toast.error(message, {
        position: "top-right",
        className: "foo-bar",
        autoClose: 15000,
        pauseOnHover: true,
      });

      break;
    case "warn":
      toast.warn(message, {
        position: "top-right",
        className: "foo-bar",
        autoClose: 2000,
        pauseOnHover: false,
      });

      break;
    case "info":
      toast.info(message, {
        position: "top-right",
        className: "foo-bar",
        autoClose: 2000,
        pauseOnHover: false,
      });

      break;

    default:
      break;
  }
};

export default Toast;
