import Login from "../features/auth/Login";
import Register from "../features/auth/Register";

export const UnAuthRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  { path: "/sign-up", element: <Register /> },
];
