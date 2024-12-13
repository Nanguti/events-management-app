import {
  CheckBadgeIcon,
  KeyIcon,
  ListBulletIcon,
  LockClosedIcon,
  ServerIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden w-64 bg-gray-800 md:block min-h-screen">
      <div
        className="py-3 px-4 text-2xl uppercase text-left tracking-widest bg-gray-900 border-b-2
       border-gray-800"
      >
        <NavLink to="/" className="text-white font-bold">
          Logo
        </NavLink>
      </div>
      <nav className="text-sm text-gray-300">
        <ul className="flex flex-col">
          <li
            className="px-4 cursor-pointer bg-gray-500 text-white hover:bg-gray-700 
           hover:text-white"
          >
            <NavLink className="py-3 flex items-center gap-1" to="/">
              <ServerIcon className="w-5 h-5" />
              Dashboard
            </NavLink>
          </li>
          <li className="px-4 py-2 text-xs uppercase tracking-wider text-white font-bold">
            USER MANAGEMENT
          </li>
          <li className="px-4 cursor-pointer hover:bg-gray-700">
            <NavLink className="py-3 flex items-center gap-1" to="/">
              <UserGroupIcon className="w-5 h-5" />
              Users
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer hover:bg-gray-700">
            <NavLink className="py-3 flex items-center gap-1" to="/">
              <KeyIcon className="w-5 h-5" />
              Roles
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer hover:bg-gray-700">
            <NavLink className="py-3 flex items-center gap-1" to="/">
              <LockClosedIcon className="w-5 h-5" />
              Permissions
            </NavLink>
          </li>
          <li className="px-4 py-2 text-xs uppercase tracking-wider text-white font-bold">
            EVENTS MANAGEMENT
          </li>
          <li className="px-4 cursor-pointer hover:bg-gray-700">
            <NavLink className="py-3 flex items-center gap-1" to="/events">
              <ListBulletIcon className="w-5 h-5" />
              Events List
            </NavLink>
          </li>
          <li className="px-4 cursor-pointer hover:bg-gray-700">
            <NavLink className="py-3 flex items-center gap-1" to="/approvals">
              <CheckBadgeIcon className="w-5 h-5" />
              Approvals
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
