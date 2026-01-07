import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InboxIcon from "@mui/icons-material/Inbox";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import LogoutPopup from "../../components/LogoutPopup";
import { ThemeColorContext } from "../../context/ThemeColorContext";

export default function DashboardLeft({
  sidebarOpen,
  setSidebarOpen,
  mobileSidebarOpen,
  setMobileSidebarOpen,
  activeItem,
  setActiveItem,
}) {
  const [exit, setExit] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => setExit(true);
  const handleCancel = () => setExit(false);
  const handleConfirmLogout = () => {
    setExit(false);
    navigate("/admin/login");
  };

  const [openDropdown, setOpenDropdown] = useState(false);

  const { color } = useContext(ThemeColorContext);

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <div
        className={`hidden md:block bg-white shadow-sm transition-all mt-5 rounded-t-lg duration-300 ${
          sidebarOpen ? "w-60" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-800 lg:ms-2">
              Dashboard
            </h1>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            {sidebarOpen ? <ChevronLeftIcon /> : <MenuIcon />}
          </button>
        </div>

        <ul className="p-3">
          {/* Home Dash */}
          <Link to="/admin">
            <button
              onClick={() => setActiveItem("home")}
              style={
                activeItem === "home"
                  ? { backgroundColor: color, color: "white" }
                  : {}
              }
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <DashboardCustomizeIcon />
              {sidebarOpen && <span>HomeDash</span>}
            </button>
          </Link>

          {/* Inbox */}
          <Link to="/admin/inbox">
            <button
              onClick={() => setActiveItem("inbox")}
              style={
                activeItem === "inbox"
                  ? { backgroundColor: color, color: "white" }
                  : {}
              }
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <InboxIcon />
              {sidebarOpen && <span>Inbox</span>}
            </button>
          </Link>

          {/* All Reports */}
          <Link to="/admin/reports">
            <button
              onClick={() => setActiveItem("reports")}
              style={
                activeItem === "reports"
                  ? { backgroundColor: color, color: "white" }
                  : {}
              }
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <TextSnippetIcon />
              {sidebarOpen && <span>All Reports</span>}
            </button>
          </Link>

          {/* Settings */}
          <Link to="/admin/settings">
            <button
              onClick={() => setActiveItem("settings")}
              style={
                activeItem === "settings"
                  ? { backgroundColor: color, color: "white" }
                  : {}
              }
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <SettingsIcon />
              {sidebarOpen && <span>Settings</span>}
            </button>
          </Link>

          {/* User Profile */}
          <Link to="/admin/userprofile">
            <button
              onClick={() => setActiveItem("userprofile")}
              style={
                activeItem === "userprofile"
                  ? { backgroundColor: color, color: "white" }
                  : {}
              }
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <AccountCircleIcon />
              {sidebarOpen && <span>User Profile</span>}
            </button>
          </Link>

          {/* Our Team */}
          <Link to="/admin/teams">
            <button
              onClick={() => setActiveItem("teams")}
              style={
                activeItem === "teams"
                  ? { backgroundColor: color, color: "white" }
                  : {}
              }
              className={`w-full flex items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <GroupsIcon />
              {sidebarOpen && <span>Our Team</span>}
            </button>
          </Link>

          {/* Support */}

          <div>
            {/* Main Support Button */}
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              style={
                activeItem === "support" ||
                ["faq", "general", "tickets"].includes(activeItem)
                  ? { backgroundColor: color, color: "white" }
                  : {}
              }
              className={`w-full flex items-center justify-between gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <div className="flex items-center gap-3">
                <SupportAgentIcon />
                {sidebarOpen && <span>Support</span>}
              </div>
              {sidebarOpen && (
                <span>
                  {openDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </span>
              )}
            </button>

            {/* Dropdown Items */}
            {openDropdown && sidebarOpen && (
              <div
                className="pl-10"
              >
                <Link to="/admin/support/faq">
                  <button
                    onClick={() => setActiveItem("faq")}
                    style={
                      activeItem === "faq"
                        ? { backgroundColor: color, color: "white" }
                        : {}
                    }
                    className="w-full flex items-center gap-3 p-2 rounded-lg mb-1 cursor-pointer text-gray-600 hover:bg-gray-100"
                  >
                    FAQ
                  </button>
                </Link>

                <Link to="/admin/support/general">
                  <button
                    onClick={() => setActiveItem("general")}
                    style={
                      activeItem === "general"
                        ? { backgroundColor: color, color: "white" }
                        : {}
                    }
                    className="w-full flex items-center gap-3 p-2 rounded-lg mb-1 cursor-pointer text-gray-600 hover:bg-gray-100"
                  >
                    General Enquiry
                  </button>
                </Link>

                <Link to="/admin/support/tickets">
                  <button
                    onClick={() => setActiveItem("tickets")}
                    style={
                      activeItem === "tickets"
                        ? { backgroundColor: color, color: "white" }
                        : {}
                    }
                    className="w-full flex items-center gap-3 p-2 rounded-lg mb-1 cursor-pointer text-gray-600 hover:bg-gray-100"
                  >
                    Tickets
                  </button>
                </Link>
              </div>
            )}
          </div>

          {/* LOGOUT */}
          <button
            onClick={handleLogoutClick}
            className={`w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 ${
              sidebarOpen ? "" : "justify-center"
            }`}
          >
            <LogoutIcon />
            {sidebarOpen && <span>Logout</span>}
          </button>

          {/* logout popup */}
          {exit && (
            <LogoutPopup
              onCancel={handleCancel}
              onConfirm={handleConfirmLogout}
            />
          )}
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

            <ul className="p-3 space-y-1">
              {/* Home */}
              <Link to="/admin">
                <button
                  onClick={() => {
                    setActiveItem("home");
                    setMobileSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <DashboardCustomizeIcon />
                  <span>HomeDash</span>
                </button>
              </Link>

              {/* Inbox */}
              <Link to="/admin/inbox">
                <button
                  onClick={() => {
                    setActiveItem("inbox");
                    setMobileSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <InboxIcon />
                  <span>Inbox</span>
                </button>
              </Link>

              {/* Reports */}
              <Link to="/admin/reports">
                <button
                  onClick={() => {
                    setActiveItem("reports");
                    setMobileSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <TextSnippetIcon />
                  <span>All Reports</span>
                </button>
              </Link>

              {/* Settings */}
              <Link to="/admin/settings">
                <button
                  onClick={() => {
                    setActiveItem("settings");
                    setMobileSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <SettingsIcon />
                  <span>Settings</span>
                </button>
              </Link>

              {/* User Profile */}
              <Link to="/admin/userprofile">
                <button
                  onClick={() => {
                    setActiveItem("userprofile");
                    setMobileSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <AccountCircleIcon />
                  <span>User Profile</span>
                </button>
              </Link>

              {/* Our Team */}
              <Link to="/admin/demopage">
                <button
                  onClick={() => {
                    setActiveItem("demopage");
                    setMobileSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <GroupsIcon />
                  <span>Our Team</span>
                </button>
              </Link>

              {/* Support */}

              <div>
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className={`w-full flex items-center justify-between items-center gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                    activeItem === "support" ||
                    ["faq", "general", "tickets"].includes(activeItem)
                      ? "bg-[#249b56] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  } ${sidebarOpen ? "" : "justify-center"}`}
                >
                  <div className="flex items-center gap-3">
                    <SupportAgentIcon />
                    {sidebarOpen && <span>Support</span>}
                  </div>
                  {sidebarOpen && (
                    <span>
                      {openDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </span>
                  )}
                </button>

                {openDropdown && sidebarOpen && (
                  <div className="pl-8">
                    <Link to="/admin/support/faq">
                      <button
                        onClick={() => setActiveItem("faq")}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg mb-1 cursor-pointer ${
                          activeItem === "faq"
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        FAQ
                      </button>
                    </Link>

                    <Link to="/admin/support/general">
                      <button
                        onClick={() => setActiveItem("general")}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg mb-1 cursor-pointer ${
                          activeItem === "general"
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        General Enquiry
                      </button>
                    </Link>

                    <Link to="/admin/support/tickets">
                      <button
                        onClick={() => setActiveItem("tickets")}
                        className={`w-full flex items-center gap-3 p-2 rounded-lg mb-1 cursor-pointer ${
                          activeItem === "tickets"
                            ? "bg-blue-500 text-white"
                            : "text-gray-600 hover:bg-gray-100"
                        }`}
                      >
                        Tickets
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Logout */}
              <button
                onClick={handleLogoutClick}
                className={`w-full flex items-center gap-3 p-3 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100 ${
                  sidebarOpen ? "" : "justify-center"
                }`}
              >
                <LogoutIcon />
                {sidebarOpen && <span>Logout</span>}
              </button>

              {/* logout popup */}
              {exit && (
                <LogoutPopup
                  onCancel={handleCancel}
                  onConfirm={handleConfirmLogout}
                />
              )}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
