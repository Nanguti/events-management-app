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
        {/* Header */}
        <div className="fixed top-0 left-64 right-0 bg-white shadow-md z-20">
          <Header />
        </div>

        {/* Main content */}
        <main className="flex-1 mt-16 mb-20 p-6 bg-gray-100 overflow-auto">
          {/* Adjust padding for header/footer space */}
          <Outlet />
        </main>

        {/* Footer */}
        <div className="fixed bottom-0 left-64 right-0 bg-white shadow-md z-20">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DefaultLayout;
