import React, { useState } from "react";
import CustomerDashboard from "./CustomerDashboard";
import JobSeekerDashboard from "./JobSeekerDashboard";
import AdminDashboard from "./AdminDashboard";
import "./styles.css";

function App() {
  const [role, setRole] = useState(null); // user role state

  // যদি role null হয়, রোল সিলেকশন দেখাবে
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

  // role অনুযায়ী Dashboard দেখাবে
  if (role === "customer") return <CustomerDashboard />;
  if (role === "jobseeker") return <JobSeekerDashboard />;
  if (role === "admin") return <AdminDashboard />;
}

export default App;
