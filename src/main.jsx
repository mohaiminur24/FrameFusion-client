import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Components/RouterLayout/Route";
import AuthancationContext from "./Components/AuthLayout/AuthancationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthancationContext>
      <RouterProvider router={route} />
    </AuthancationContext>
  </React.StrictMode>
);
