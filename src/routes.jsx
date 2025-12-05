import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./Component/Files/Layout/MainLayout";
import Home from "./Component/Files/Home";
import Login from "./Component/Files/Login";
import SignUp from "./Component/Files/SignUp";

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "/login",
        element:<Login></Login>,
      },
      {
        path: "/register",
        element:<SignUp></SignUp>,
      },
      
    ],
    }
      

]);