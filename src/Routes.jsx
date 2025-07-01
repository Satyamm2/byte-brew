import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Applayout } from "./App";
import Home from "./components/Home";
import LogUser from "./components/LogUser";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/log-user",
        element: <LogUser />,
      },
    ],
  },
]);

export default AppRouter;
