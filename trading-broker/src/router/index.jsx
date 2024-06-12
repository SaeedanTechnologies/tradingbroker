import { createBrowserRouter } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";
import { UnAuthRoutes } from "./UnAuthRoutes";
import ProtectedRoute from "./ProtectRoutes";
import UnAuthenticatedRoutes from "./UnAuthenticatedRoutes";

export const router = createBrowserRouter([
  ...PublicRoutes,
  ...PrivateRoutes.map((route) => ({
    ...route,
    element: <ProtectedRoute element={route.element} />,
  })),
  ...UnAuthRoutes.map((route) => ({
    ...route,
    element: <UnAuthenticatedRoutes element={route.element} />,
  })),
]);
