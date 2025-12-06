import React, { useState } from "react";
import RoleSelection from "./components/RoleSelection";
import AdminLogin from "./components/AdminLogin";
import AdminDashboard from "./components/AdminDashboard";
import HomePage from "./components/HomePage";

function App() {
  const [role, setRole] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  if (!role) return <RoleSelection setRole={setRole} />;
  if (role === "admin" && !isAdmin) return <AdminLogin setIsAdmin={setIsAdmin} />;
  if (role === "admin" && isAdmin) return <AdminDashboard />;
  return <HomePage />;
}

export default App;
