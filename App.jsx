import React, { useState } from "react";
import CustomerDashboard from "./CustomerDashboard";
import JobSeekerDashboard from "./JobSeekerDashboard";
import AdminDashboard from "./AdminDashboard";
import "./styles.css";

function App() {
  const [role, setRole] = useState(null); // user role state
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const [adminUserId, setAdminUserId] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Handle Admin Login
  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminUserId === "Daily" && adminPassword === "nafis128!@*") {
      setIsAdminLoggedIn(true);
      setErrorMsg("");
    } else {
      setErrorMsg("Invalid User ID or Password!");
    }
  };

  // Role Selection Page
  if (!role) {
    return (
      <div className="role-selection-page">
        <h1>Welcome! আপনার রোল নির্বাচন করুন</h1>
        <div className="role-buttons">
          <button onClick={() => setRole("customer")}>Customer</button>
          <button onClick={() => setRole("jobseeker")}>Job Seeker</button>
          <button onClick={() => setRole("admin")}>Admin</button>
        </div>
      </div>
    );
  }

  // Customer & Job Seeker Dashboard
  if (role === "customer") return <CustomerDashboard />;
  if (role === "jobseeker") return <JobSeekerDashboard />;

  // Admin Login Page
  if (role === "admin" && !isAdminLoggedIn) {
    return (
      <div className="admin-login-page">
        <h1>Admin Login</h1>
        <form onSubmit={handleAdminLogin}>
          <input
            type="text"
            placeholder="User ID"
            value={adminUserId}
            onChange={(e) => setAdminUserId(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={adminPassword}
            onChange={(e) => setAdminPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
          {errorMsg && <p className="error">{errorMsg}</p>}
        </form>
      </div>
    );
  }

  // Admin Dashboard
  if (role === "admin" && isAdminLoggedIn) return <AdminDashboard />;
}

export default App;
