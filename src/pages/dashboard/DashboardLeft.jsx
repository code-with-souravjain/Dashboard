import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function DashboardLeft({
  sidebarOpen,
  setSidebarOpen,
  mobileSidebarOpen,
  setMobileSidebarOpen,
  activeItem,
  setActiveItem,
}) {
  const menuItems = [
    {
      label: "HomeDash",
      icon: <DashboardCustomizeIcon />,
      path: "/admin",
      key: "home",
    },
    {
      label: "Inbox",
      icon: <InboxIcon />,
      path: "/admin/inbox",
      key: "inbox",
    },
    {
      label: "All Reports",
      icon: <TextSnippetIcon />,
      path: "/admin/reports",
      key: "reports",
    },
    {
      label: "Settings",
      icon: <SettingsIcon />,
      path: "/admin/settings",
      key: "settings",
    },
    {
      label: "User Profile",
      icon: <AccountCircleIcon />,
      path: "/admin/userprofile",
      key: "userprofile",
    },
    {
      label: "Demo Page",
      icon: "🔍",
      path: "/admin/demopage",
      key: "demopage",
    },
  ];

  const [exit, setExit] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setExit(true);
  };

  const handleCancel = () => {
    setExit(false);
  };

  const handleConfirmLogout = () => {
    setExit(false);
    navigate("/admin/login");
  };

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <div
        className={`hidden md:block bg-white shadow-sm transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            {sidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </button>
        </div>

        <ul className="p-3">
          {menuItems.map((item) => (
            <Link to={item.path} key={item.key}>
              <button
                onClick={() => setActiveItem(item.key)}
                className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                  activeItem === item.key
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                } ${sidebarOpen ? "" : "justify-center"}`}
              >
                {item.icon}
                {sidebarOpen && <span>{item.label}</span>}
              </button>
            </Link>
          ))}

          {/* LOGOUT */}
          <button
            onClick={handleLogoutClick}
            className={`w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer
             text-gray-700 hover:bg-gray-100
              ${sidebarOpen ? "" : "justify-center"}`}
          >
            <LogoutIcon />
            {sidebarOpen && <span>Logout</span>}
          </button>

          {/* logout popup */}
          {exit && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-lg font-semibold mb-4 text-gray-800">
                  Are you sure you want to logout?
                </h2>

                <div className="flex justify-end gap-4">
                  <button
                    onClick={handleCancel}
                    className="px-5 py-2 border cursor-pointer rounded-lg text-gray-700 hover:bg-gray-100"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={handleConfirmLogout}
                    className="px-5 py-2 rounded-lg cursor-pointer bg-red-600 text-white hover:bg-red-700"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* logout popup */}
        </ul>
      </div>

      {/* ================= MOBILE SIDEBAR ================= */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        >
          <div
            className="bg-white w-72 h-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h1 className="text-xl font-bold">Dashboard</h1>
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <ChevronLeftIcon />
              </button>
            </div>

            <ul className="p-3">
              {menuItems.map((item) => (
                <Link to={item.path} key={item.key}>
                  <button
                    onClick={() => {
                      setActiveItem(item.key);
                      setMobileSidebarOpen(false);
                    }}
                    className="w-full flex items-center gap-3 p-3 rounded-lg mb-2 hover:bg-gray-100"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </button>
                </Link>
              ))}

              {/* LOGOUT */}
              <Link to="/admin/login">
                <button
                  onClick={() => {
                    setActiveItem("logout");
                    setMobileSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 text-red-600"
                >
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
