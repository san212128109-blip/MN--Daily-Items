import React, { useState } from "react";
import AdminDashboard from "./AdminDashboard";
import "./admin.css";

function AdminLogin() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (userId === "Daily" && password === "nafis128!@*") {
      setLoggedIn(true);
      setError("");
    } else {
      setError("Invalid User ID or Password!");
    }
  };

  if (loggedIn) return <AdminDashboard />;

  return (
    <div className="admin-login-page">
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="User ID"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
}

export default AdminLogin;
