import React from "react";

const Header: React.FC = () => {
  return (
    <nav className="bg-gray-800 text-white py-3 px-4 flex items-center justify-between">
      <a className="font-bold text-xl tracking-tight" href="#">
        Events Management
      </a>
      <div className="flex items-center">
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          Message
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          Notification
        </a>
        <a
          className="text-sm px-4 py-2 leading-none rounded-full hover:bg-gray-700"
          href="#"
        >
          Account
        </a>
      </div>
    </nav>
  );
};

export default Header;
