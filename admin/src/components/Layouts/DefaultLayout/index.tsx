import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DefaultLayout: React.FC = () => {
  return (
    <div className="relative min-h-screen">
      {/* Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-md z-10">
        <Sidebar />
      </div>
      {/* Content area */}
      <div className="ml-64 flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
