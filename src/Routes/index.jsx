import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeLayout from "../layouts/HomeLayout";
import InfoLayout from "../layouts/InfoLayout";
import ProfileLayout from "../layouts/ProfileLayout";
import ConnectionLayout from "../layouts/ConnectionLayout";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/home",
      element: <HomeLayout/>,
    },
    {
      path: "/info",
      element: <InfoLayout/>,
    },
    {
      path: "/profile",
      element: <ProfileLayout/>,
    },

    {
      path: "/connections",
      element: <ConnectionLayout/>,
    },
  ]);


