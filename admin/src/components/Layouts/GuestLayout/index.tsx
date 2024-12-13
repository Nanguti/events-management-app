import React from "react";
import { Outlet } from "react-router-dom";

const GuestLayout: React.FC = () => {
  return (
    <div className="guest-layout">
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <Outlet />
      </main>
    </div>
  );
};

export default GuestLayout;
