import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: '',
        element: <Navigate to={'/category/01'} />
      },
      {
        path: "/category/:id",
        element: <h2>This is Category botoi</h2>,
      },
    ],
  },
]);

export default router;
