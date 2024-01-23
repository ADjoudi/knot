import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChatPage from "../pages/ChatPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ChatPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
