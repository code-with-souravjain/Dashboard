import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative w-full lg:w-72">
      
      {/* Search Icon */}
      <SearchIcon
        className="absolute left-4  top-5 -translate-y-1/2 text-gray-400"
        fontSize="small"
      />

      {/* Input */}
      <input
        type="search"
        placeholder="Search..."
        className="
          w-full pl-11 pr-4 py-2.5
          rounded-full border border-gray-300
          text-sm lg:text-md
          focus:outline-none focus:ring-2 focus:ring-blue-500
          focus:border-blue-500
          bg-white
        "
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
