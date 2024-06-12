import { Navigate } from "react-router-dom";

export const PublicRoutes = [
  { path: "/", element: <Navigate to="login" replace /> },
];
