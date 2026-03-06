import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function MainLayout() {

  return (
    <div>

      <Navbar />
      <Sidebar />
      <Outlet />

    </div>
  );
}

export default MainLayout;