import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const location = useLocation();
  const userToken = useSelector((state) => state?.auth?.loginUser?.token);

  return userToken ? (
    element
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
