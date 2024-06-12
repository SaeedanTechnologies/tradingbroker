import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  // debugger;
  const location = useLocation();
  const userToken = useSelector((state) => state?.auth?.token);

  return userToken ? (
    element
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
