import { createBrowserRouter } from "react-router-dom";
import Main from './../Layout/Main';
import Home from "../pages/Home/Home/Home";
import Bike from "../pages/Bike/Bike";
import Order from "../pages/Order/Order/Order";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/bike",
        element: <Bike/>
      },
      {
        path: "/order",
        element: <Order/>
      }
    ]
  },
]);

export default router;