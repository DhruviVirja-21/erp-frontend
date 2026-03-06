import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">

      <Link to="/dashboard">Dashboard</Link>

      <Link to="/sales">Sales</Link>

      <Link to="/purchase">Purchase</Link>

      <Link to="/production">Production</Link>

      <Link to="/finance">Finance</Link>

      <Link to="/hr">HR</Link>

      <Link to="/logistics">Logistics</Link>

      <Link to="/quality">Quality</Link>

      <Link to="/warehouse">Warehouse</Link>

      <Link to="/assets">Assets</Link>

      <Link to="/reports">Reports</Link>

      <Link to="/users">Users</Link>

      <Link to="/settings">Settings</Link>

    </div>
  );
}

export default Sidebar;