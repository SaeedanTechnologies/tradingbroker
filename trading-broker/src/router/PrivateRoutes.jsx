import Dashboard from "../features/dashboard";
import TradingAccount from "../features/dashboard/pages/TradingAccount";
import WebTerminal from "../features/dashboard/pages/WebTerminal";

export const PrivateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { path: "trading-account", element: <TradingAccount /> },
      { path: "web-terminal", element: <WebTerminal /> },
    ],
  },
];
