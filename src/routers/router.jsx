import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ChatPage from "../pages/ChatPage";
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/home",
    element: <ChatPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
