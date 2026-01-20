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
import LanguageData from "../../components/LanguageData";

import { LanguageContext } from "../../context/LanguageContext";

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

  const [iconDropdown, setIconDropdown] = useState(false);

  const { color } = useContext(ThemeColorContext);

  const { lng } = useContext(LanguageContext);
  const lngText = LanguageData[lng];

  console.log(lngText.home); // Hello

  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <div
        className={`hidden md:block bg-white shadow-sm transition-all mt-4 rounded-t-lg duration-300 ${
          sidebarOpen ? "w-60" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && (
            <h1 className="text-xl font-bold text-gray-800 lg:ms-2">
              {lngText.dashboard}
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
              {sidebarOpen && <span>{lngText.home}</span>}
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
              {sidebarOpen && <span>{lngText.inbox}</span>}
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
              {/* {sidebarOpen && <span>All Reports</span>} */}
              {sidebarOpen && <span>{lngText.reports}</span>}
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
              {sidebarOpen && <span>{lngText.settings}</span>}
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
              {sidebarOpen && <span>{lngText.userprofile}</span>}
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
              {sidebarOpen && <span>{lngText.teams}</span>}
            </button>
          </Link>

          {/* Support */}

          <div>
            {/* Main Support Button */}
            <button
              onClick={() => {
                if (sidebarOpen) {
                  setOpenDropdown(!openDropdown);
                } else {
                  setIconDropdown(!iconDropdown);
                }
              }}
              style={
                activeItem === "support" ||
                ["faq", "enquiry", "tickets"].includes(activeItem)
                  ? { backgroundColor: color, color: "white" }
                  : {}
              }
              className={`w-full flex items-center justify-between gap-3 p-3 rounded-lg mb-2 cursor-pointer ${
                sidebarOpen ? "" : "justify-center"
              }`}
            >
              <div className="flex items-center gap-3">
                <SupportAgentIcon />
                {sidebarOpen && <span>{lngText.support}</span>}
              </div>
              {sidebarOpen && (
                <span>
                  {openDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </span>
              )}
            </button>

            {/* Dropdown Items */}
            {openDropdown && sidebarOpen && (
              <div className="pl-10">
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
                    {sidebarOpen && <span>{lngText.faq}</span>}
                  </button>
                </Link>

                <Link to="/admin/support/enquiry">
                  <button
                    onClick={() => setActiveItem("enquiry")}
                    style={
                      activeItem === "enquiry"
                        ? { backgroundColor: color, color: "white" }
                        : {}
                    }
                    className="w-full flex items-center gap-3 p-2 rounded-lg mb-1 cursor-pointer text-gray-600 hover:bg-gray-100"
                  >
                    {sidebarOpen && <span>{lngText.enquiry}</span>}
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
                    {sidebarOpen && <span>{lngText.tickets}</span>}
                  </button>
                </Link>
              </div>
            )}

            {/* agar meri sidebar band hai to sirf support ka icon dikhega and uspe click karne pai box oppen hoga side mai */}

            {!sidebarOpen && iconDropdown && (
              <div className="w-44 px-5 py-4 bg-gray-200/80 absolute bottom-12 left-17 z-50 shadow-lg rounded-xl">
                <Link to="/admin/support/faq">
                  <button
                    onClick={() => {
                      setActiveItem("faq");
                      setIconDropdown(false);
                    }}
                    style={
                      activeItem === "faq"
                        ? { backgroundColor: color, color: "white" }
                        : {}
                    }
                    className="w-full flex items-center gap-3 p-2 rounded-lg mb-1 cursor-pointer text-gray-700 hover:bg-gray-100"
                  >
                    <span>{lngText.faq}</span>
                  </button>
                </Link>

                <Link to="/admin/support/enquiry">
                  <button
                    onClick={() => {
                      setActiveItem("enquiry");
                      setIconDropdown(false);
                    }}
                    style={
                      activeItem === "enquiry"
                        ? { backgroundColor: color, color: "white" }
                        : {}
                    }
                    className="w-full flex items-center gap-3 p-2 rounded-lg mb-1 cursor-pointer text-gray-700 hover:bg-gray-100"
                  >
                    <span>{lngText.enquiry}</span>
                  </button>
                </Link>

                <Link to="/admin/support/tickets">
                  <button
                    onClick={() => {
                      setActiveItem("tickets");
                      setIconDropdown(false);
                    }}
                    style={
                      activeItem === "tickets"
                        ? { backgroundColor: color, color: "white" }
                        : {}
                    }
                    className="w-full flex items-center gap-3 p-2 rounded-lg cursor-pointer text-gray-700 hover:bg-gray-100"
                  >
                    <span>{lngText.tickets}</span>
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
            {sidebarOpen && <span>{lngText.logout}</span>}
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
          className="fixed top-12 inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
        >
          <div
            className="bg-white w-72 h-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h1 className="text-xl font-bold">{lngText.dashboard}</h1>
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
                  <span>{lngText.home}</span>
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
                  <span>{lngText.inbox}</span>
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
                  <span>{lngText.reports}</span>
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
                  <span>{lngText.settings}</span>
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
                  <span>{lngText.profile}</span>
                </button>
              </Link>

              {/* Our Team */}
              <Link to="/admin/teams">
                <button
                  onClick={() => {
                    setActiveItem("teams");
                    setMobileSidebarOpen(false);
                  }}
                  className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <GroupsIcon />
                  <span>{lngText.teams}</span>
                </button>
              </Link>

              {/* ===== SUPPORT (FIXED) ===== */}
              <div>
                <button
                  onClick={() => setOpenDropdown(!openDropdown)}
                  className="w-full flex items-center justify-between gap-3 p-3 rounded-lg hover:bg-gray-100"
                >
                  <div className="flex items-center gap-3">
                    <SupportAgentIcon />
                    <span>{lngText.support}</span>
                  </div>
                  {openDropdown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                </button>

                {openDropdown && (
                  <div className="pl-8 mt-1 space-y-1">
                    <Link to="/admin/support/faq">
                      <button
                        onClick={() => {
                          setActiveItem("faq");
                          setMobileSidebarOpen(false);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                      >
                        {lngText.faq}
                      </button>
                    </Link>

                    <Link to="/admin/support/enquiry">
                      <button
                        onClick={() => {
                          setActiveItem("enquiry");
                          setMobileSidebarOpen(false);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                      >
                        {lngText.enquiry}
                      </button>
                    </Link>

                    <Link to="/admin/support/tickets">
                      <button
                        onClick={() => {
                          setActiveItem("tickets");
                          setMobileSidebarOpen(false);
                        }}
                        className="w-full text-left p-2 rounded-lg hover:bg-gray-100"
                      >
                        {lngText.tickets}
                      </button>
                    </Link>
                  </div>
                )}
              </div>

              {/* Logout */}
              <button
                onClick={handleLogoutClick}
                className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
              >
                <LogoutIcon />
                <span>{lngText.logout}</span>
              </button>

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
