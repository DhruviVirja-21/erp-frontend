import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
// import Employees from "./Employees";
// import Departments from "./Departments";
// import Projects from "./Projects";
// import Inventory from "./Inventory";
// import Attendance from "./Attendance";
// import Reports from "./Reports";
// import Settings from "./Settings";
import MainLayout from "./MainLayout";

function App() {
  return (
    <BrowserRouter>

      <Routes>


        <Route path="/" element={<MainLayout />}>

          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />


        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;