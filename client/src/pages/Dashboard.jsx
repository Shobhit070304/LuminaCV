import React from "react";
import { useAuth } from "../context/UserContext.jsx";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div className="pt-28 px-6 md:px-12 min-h-screen bg-gradient-to-br from-amber-50/80 to-orange-50/80">
      <div className="max-w-3xl mx-auto bg-gray-50 shadow-md rounded-2xl p-8 ">
        <h1 className="text-3xl font-semibold text-gray-800 mb-2">
          Welcome, {user.name || "User"} 👋
        </h1>
        <p className="text-gray-600 mb-6 text-sm">Email: {user.email}</p>
        <button
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 hover:cursor-pointer text-white px-5 py-2 rounded-full transition-all text-sm"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
