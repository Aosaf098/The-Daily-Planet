import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../Components/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";

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
        element: <CategoryNews />,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
      },
    ],
  },
  {
    path: 'auth',
    element: <AuthLayout />,
    children: [
        {
            path: '/auth/login',
            element: <Login />,
        },
        {
            path: '/auth/register',
            element: <Register />,
        }
    ]
  },
  {
    path: '/news/:id',
    element: <NewsDetails />
  }
]);

export default router;
