import React from "react";
import "./dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">

      <h1 className="dashboard-title">Dashboard</h1>

      {/* Cards */}
      <div className="card-container">

        <div className="card">
          <h3>Total Sales</h3>
          <p>₹2,50,000</p>
        </div>

        <div className="card">
          <h3>Total Purchase</h3>
          <p>₹1,80,000</p>
        </div>

        <div className="card">
          <h3>Total Members</h3>
          <p>45</p>
        </div>

        <div className="card">
          <h3>Inventory Stock</h3>
          <p>320 Items</p>
        </div>

        <div className="card">
          <h3>Pending Orders</h3>
          <p>12</p>
        </div>

        <div className="card">
          <h3>Pending Payments</h3>
          <p>₹65,000</p>
        </div>

      </div>


      {/* Charts Section */}
      <div className="charts">

        <div className="chart-box">
          <h3>Sales Chart</h3>
          <div className="chart-placeholder">Chart Here</div>
        </div>

        <div className="chart-box">
          <h3>Production Chart</h3>
          <div className="chart-placeholder">Chart Here</div>
        </div>

        <div className="chart-box">
          <h3>Inventory Chart</h3>
          <div className="chart-placeholder">Chart Here</div>
        </div>

      </div>


      {/* Tables */}

      <div className="tables">

        <div className="table-box">
          <h3>Recent Sales Orders</h3>

          <table>
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>SO101</td>
                <td>ABC Ltd</td>
                <td>₹25,000</td>
              </tr>

              <tr>
                <td>SO102</td>
                <td>XYZ Pvt</td>
                <td>₹18,000</td>
              </tr>

              <tr>
                <td>SO103</td>
                <td>Global Tech</td>
                <td>₹12,500</td>
              </tr>
            </tbody>
          </table>

        </div>


        <div className="table-box">
          <h3>Recent Purchase Orders</h3>

          <table>
            <thead>
              <tr>
                <th>PO ID</th>
                <th>Supplier</th>
                <th>Amount</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PO201</td>
                <td>Steel Corp</td>
                <td>₹15,000</td>
              </tr>

              <tr>
                <td>PO202</td>
                <td>Metal Works</td>
                <td>₹9,000</td>
              </tr>

              <tr>
                <td>PO203</td>
                <td>Industrial Ltd</td>
                <td>₹20,000</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;