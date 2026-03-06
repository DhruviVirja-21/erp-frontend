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

          {/* <Route path="/employees" element={<Employees />} />

          <Route path="/departments" element={<Departments />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/inventory" element={<Inventory />} />

          <Route path="/attendance" element={<Attendance />} />

          <Route path="/reports" element={<Reports />} />

          <Route path="/settings" element={<Settings />} /> */}

        </Route>

      </Routes>

    </BrowserRouter>
  );
}

export default App;