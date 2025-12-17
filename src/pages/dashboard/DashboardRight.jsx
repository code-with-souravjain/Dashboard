import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
// import Inbox from "../Inbox/Inbox";
import PageRender from "../main/PageRender"

export default function DashboardRight({ setMobileSidebarOpen }) {
  return (
    <div className="flex-1 overflow-auto bg-gray-50">
      <div className=" sm:p-2 md:p-6">

        {/* Mobile Sidebar Toggle */}
        <button 
          className="md:hidden mb-6 p-2 hover:bg-white rounded-lg shadow-sm bg-white"
          onClick={() => setMobileSidebarOpen(true)}
        >
          <MenuIcon />
        </button>

        <div className="bg-white rounded-lg shadow-sm p-5">
           <PageRender />
        </div>
      </div>
    </div>
  );
}
