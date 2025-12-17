import React from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function DashboardLeft({
  sidebarOpen,
  setSidebarOpen,
  mobileSidebarOpen,
  setMobileSidebarOpen,
  activeItem,
  setActiveItem,
}) {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`hidden md:block bg-white shadow-sm  transition-all duration-300 ${sidebarOpen ? "w-64" : "w-20"}`}>
        <div className="flex items-center justify-between p-4  border-b border-gray-200">
          {sidebarOpen && <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>}
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg sm:ml-3 sm:mt-5"
          >
            {sidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </button>
        </div>

        <ul className="p-3">
          <Link to="/homedash">
            <button
              onClick={() => setActiveItem("HomeDash")}
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 ${activeItem === "HomeDash" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"} ${sidebarOpen ? "" : "justify-center"}`}
            >
              <DashboardCustomizeIcon />
              {sidebarOpen && <span>HomeDash</span>}
            </button>
          </Link>

          <Link to="/inbox">
            <button
              onClick={() => setActiveItem("Inbox")}
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 ${activeItem === "Inbox" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"} ${sidebarOpen ? "" : "justify-center"}`}
            >
              <InboxIcon />
              {sidebarOpen && <span>Inbox</span>}
            </button>
          </Link>

          <Link to="/reports">
            <button
              onClick={() => setActiveItem("Articles")}
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 ${activeItem === "Articles" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"} ${sidebarOpen ? "" : "justify-center"}`}
            >
              <TextSnippetIcon />
              {sidebarOpen && <span>All Reports</span>}
            </button>
          </Link>

          <Link to="/settings">
            <button
              onClick={() => setActiveItem("Settings")}
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 ${activeItem === "Settings" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"} ${sidebarOpen ? "" : "justify-center"}`}
            >
              <SettingsIcon />
              {sidebarOpen && <span>Settings</span>}
            </button>
          </Link>

           <Link to="/userprofile">
            <button
              onClick={() => setActiveItem("userprofile")}
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 ${activeItem === "userprofile" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"} ${sidebarOpen ? "" : "justify-center"}`}
            >
              <AccountCircleIcon />
              {sidebarOpen && <span>User Profile</span>}
            </button>
          </Link>

          <Link to="/login">
            <button
              onClick={() => setActiveItem("Logout")}
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 ${activeItem === "Logout" ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-100"} ${sidebarOpen ? "" : "justify-center"}`}
            >
              <LogoutIcon />
              {sidebarOpen && <span>Logout</span>}
            </button>
          </Link>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      {mobileSidebarOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 md:hidden" onClick={() => setMobileSidebarOpen(false)}>
          <div className="bg-white w-72 h-full shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
              <button onClick={() => setMobileSidebarOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg">
                <ChevronLeftIcon />
              </button>
            </div>

            <ul className="p-3">
              {/* Repeat all menu items for mobile */}
              <Link to="/homedash">
                <button onClick={() => { setActiveItem("HomeDash"); setMobileSidebarOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-gray-100">
                  <DashboardCustomizeIcon />
                  <span>HomeDash</span>
                </button>
              </Link>

              <Link to="/inbox">
                <button onClick={() => { setActiveItem("Inbox"); setMobileSidebarOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-gray-100">
                  <InboxIcon />
                  <span>Inbox</span>
                </button>
              </Link>

              <Link to="/reports">
                <button onClick={() => { setActiveItem("Articles"); setMobileSidebarOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-gray-100">
                  <TextSnippetIcon />
                  <span>All Reports</span>
                </button>
              </Link>

              <Link to="/settings">
                <button onClick={() => { setActiveItem("Settings"); setMobileSidebarOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-gray-100">
                  <SettingsIcon />
                  <span>Settings</span>
                </button>
              </Link>

              <Link to="/logout">
                <button onClick={() => { setActiveItem("Logout"); setMobileSidebarOpen(false); }} className="w-full flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-gray-100">
                  <LogoutIcon />
                  <span>Logout</span>
                </button>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
