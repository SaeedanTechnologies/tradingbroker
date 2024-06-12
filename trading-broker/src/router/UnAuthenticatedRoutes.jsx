import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const UnAuthenticatedRoutes = ({ element }) => {
  // debugger;
  const location = useLocation();
  const userToken = useSelector((state) => state?.auth?.token);

  return !userToken ? (
    element
  ) : (
    <Navigate to="/dashboard" state={{ from: location }} replace />
  );
};

export default UnAuthenticatedRoutes;
