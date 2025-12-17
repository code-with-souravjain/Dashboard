import React, { useState } from "react";
import DashboardLeft from "./DashboardLeft";
import DashboardRight from "./DashboardRight";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Inbox");

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardLeft 
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobileSidebarOpen={mobileSidebarOpen}
        setMobileSidebarOpen={setMobileSidebarOpen}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />

      <DashboardRight setMobileSidebarOpen={setMobileSidebarOpen} />
    </div>
  );
}
