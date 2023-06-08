import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import route from "./Components/RouterLayout/Route";
import AuthancationContext from "./Components/AuthLayout/AuthancationContext";
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthancationContext>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
      </QueryClientProvider>
    </AuthancationContext>
  </React.StrictMode>
);
