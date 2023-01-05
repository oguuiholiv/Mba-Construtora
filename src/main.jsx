import React from "react";
import ReactDOM from "react-dom/client";

import "../src/assets/css/reset.css";
import Router from "./Routes/root";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
