import { signOut } from "@/auth";
import React from "react";

const Dashboard = () => {
  const handleSignOut = async () => {
    "use server";
    await signOut();
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold">Dashboard</h1>
      <button className="btn btn-primary" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
};

export default Dashboard;
