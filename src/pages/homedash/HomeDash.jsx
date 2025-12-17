import React from "react";
import PeopleIcon from "@mui/icons-material/People";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CountUp from "react-countup";

const HomeDash = () => {
  
  const dashboardStats = [
    {
      id: 1,
      title: "Total Users",
      count: 25,
      icon: <PeopleIcon style={{ fontSize: 70, color: "#1976d2" }} />,
    },
    {
      id: 2,
      title: "Pending Users",
      count: 3,
      icon: <PersonRemoveIcon style={{ fontSize: 70, color: "#1976d2" }} />,
    },
    {
      id: 3,
      title: "Ongoing Tasks",
      count: 7,
      icon: (
        <FormatListNumberedIcon style={{ fontSize: 70, color: "#1976d2" }} />
      ),
    },
    {
      id: 4,
      title: "Pending Tasks",
      count: 3,
      icon: <PendingActionsIcon style={{ fontSize: 70, color: "#1976d2" }} />,
    },
  ];

  return (
    <div className="p-4 md:p-6  w-full mx-auto">
      <h1 className="text-lg md:text-2xl font-medium mb-6">
        Welcome to the Home Dashboard
      </h1>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-9">
        {dashboardStats.map((elem) => (
          <div
            key={elem.id}
            className="bg-[#efefef] rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center cursor-pointer"
          >
            <span>{elem.icon}</span>

            <h2 className="text-3xl md:text-4xl font-bold my-4">
              <CountUp end={elem.count} />
            </h2>

            <h3 className="text-lg font-medium">{elem.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDash;
