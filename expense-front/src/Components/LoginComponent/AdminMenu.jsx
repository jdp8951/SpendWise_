// import React, { useState } from "react";
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
// import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import "bootstrap/dist/css/bootstrap.min.css";

// const AdminMenu = () => {
//   const [totalUsers, setTotalUsers] = useState(240);
//   const [transactions, setTransactions] = useState(589);
//   const [revenue, setRevenue] = useState(120350);
//   const [growth, setGrowth] = useState(4.2);

//   const revenueData = [
//     { month: "Jan", value: 10000 },
//     { month: "Feb", value: 15000 },
//     { month: "Mar", value: 12000 },
//     { month: "Apr", value: 18000 },
//   ];

//   return (
//     <div style={{ backgroundColor: "#0a192f", minHeight: "100vh", color: "#ffffff", padding: "20px" }}>
//       {/* Sidebar */}
//       <div
//         style={{
//           position: "fixed",
//           left: "0",
//           top: "0",
//           width: "250px",
//           height: "100vh",
//           backgroundColor: "#112240",
//           padding: "20px",
//         }}
//       >
//         <h4 className="text-white text-center mb-4">Admin Panel</h4>
//         <ul className="nav flex-column">
//           <li className="nav-item">
//             <a className="nav-link text-white" href="#">Dashboard</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-white" href="#">Users</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-white" href="#">Transactions</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link text-white" href="#">Reports</a>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div style={{ marginLeft: "260px" }}>
//         <h2 className="text-center">📊 Admin Dashboard</h2>

//         {/* Summary Cards */}
//         <div className="d-flex justify-content-between mb-4">
//           {[
//             { title: "Total Users", value: totalUsers, color: "#4D5BF9" },
//             { title: "Transactions", value: transactions, color: "#FC7180" },
//             { title: "Revenue", value: `$${revenue.toLocaleString()}`, color: "#FFA000" },
//           ].map((item, index) => (
//             <div
//               key={index}
//               style={{
//                 backgroundColor: item.color,
//                 padding: "20px",
//                 width: "30%",
//                 textAlign: "center",
//                 borderRadius: "10px",
//               }}
//             >
//               <h5>{item.title}</h5>
//               <h3>{item.value}</h3>
//             </div>
//           ))}
//         </div>

//         {/* Revenue Trends Chart */}
//         <div style={{ backgroundColor: "#112240", padding: "20px", borderRadius: "10px" }}>
//           <h5 className="text-center">📈 Revenue Trends</h5>
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={revenueData}>
//               <XAxis dataKey="month" stroke="#ffffff" />
//               <YAxis stroke="#ffffff" />
//               <Tooltip />
//               <Line type="monotone" dataKey="value" stroke="#00c6ff" strokeWidth={3} dot={{ r: 5 }} />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>

//         {/* Bottom Section - Analysis & Progress */}
//         <div className="d-flex justify-content-between mt-4">
//           {/* User Engagement */}
//           <div style={{ width: "30%", backgroundColor: "#112240", padding: "20px", borderRadius: "10px" }}>
//             <h5>User Engagement</h5>
//             <CircularProgressbar
//               value={75}
//               text="75%"
//               styles={buildStyles({ textColor: "#ffffff", pathColor: "#4D5BF9", trailColor: "#223555" })}
//             />
//           </div>

//           {/* Transactions Progress */}
//           <div style={{ width: "30%", backgroundColor: "#112240", padding: "20px", borderRadius: "10px" }}>
//             <h5>Transactions Completed</h5>
//             <CircularProgressbar
//               value={60}
//               text="60%"
//               styles={buildStyles({ textColor: "#ffffff", pathColor: "#FC7180", trailColor: "#223555" })}
//             />
//           </div>

//           {/* Revenue Progress */}
//           <div style={{ width: "30%", backgroundColor: "#112240", padding: "20px", borderRadius: "10px" }}>
//             <h5>Revenue Growth</h5>
//             <CircularProgressbar
//               value={growth}
//               text={`${growth}%`}
//               styles={buildStyles({ textColor: "#ffffff", pathColor: "#FFA000", trailColor: "#223555" })}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminMenu;


import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const AdminMenu = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/LoginPage"); // Redirect to login page
  };

  return (
    <Navbar style={{ backgroundColor: "#001F3F" ,height: "80px" }} variant="dark" bg="dark" expand="lg" className="py-3" >
      <Container fluid>
        {/* Left Side - System Name */}
        <Navbar.Brand className="fw-bold fs-4">Expense Management System</Navbar.Brand>

        <Navbar.Toggle aria-controls="admin-navbar" />
        <Navbar.Collapse id="admin-navbar">
          <Nav className="ms-auto d-flex align-items-center">
            {/* Customer List */}
            <Nav.Link href="#" className="mx-3 fs-5">Customer List</Nav.Link>

            {/* Category Dropdown */}
            <NavDropdown title="Category" id="category-dropdown" className="mx-3 fs-5">
              <NavDropdown.Item href="/category-add">Category Addition</NavDropdown.Item>
              <NavDropdown.Item href="/admin-category-list">Category List</NavDropdown.Item>
            </NavDropdown>

            {/* Expense Report */}
            <Nav.Link href="#" className="mx-3 fs-5">Expense Report</Nav.Link>

            {/* Logout */}
            <Nav.Link onClick={handleLogout} className="text-danger fw-bold mx-3 fs-5" style={{ cursor: "pointer" }}>
              Logout
            </Nav.Link>

            {/* Profile mentioning Admin */}
            <Nav.Link className="fw-bold text-warning mx-3 fs-5">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AdminMenu;
