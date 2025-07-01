import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import LogUser from "./components/LogUser";
import { Outlet, RouterProvider, useLocation } from "react-router-dom";
import AppRouter from "./Routes";

export function Applayout() {
  const location = useLocation();
  const hideNavbarPaths = ["/log-user"];

  const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <Outlet />
    </>
  );
}

function App() {
  return (
    <>
      <RouterProvider router={AppRouter} />
    </>
  );
}

export default App;
