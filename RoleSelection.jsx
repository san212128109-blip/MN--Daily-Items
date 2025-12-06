import React from "react";

function RoleSelection({ setRole }) {
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

export default RoleSelection;
