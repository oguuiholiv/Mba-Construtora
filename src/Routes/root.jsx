import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../error-page";
import { Home } from "../Pages/Home/index";
import { Intranet } from "../Pages/Intranet/index";
import App from "../App";
import { Forgot } from "./../Pages/Forgot/index";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/intranet",
    element: <Intranet />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/forgot",
    element: <Forgot />,
    errorElement: <ErrorPage />,
  },
]);

export default Router;
