import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useContext } from "react";
import { ThemeColorContext } from "../../context/ThemeColorContext";
ThemeColorContext;

const Searchbar = ({ searchTerm, setSearchTerm }) => {
  const { color } = useContext(ThemeColorContext);

  return (
    <div className="relative w-full lg:w-72">
      {/* Search Icon */}
      <SearchIcon
        className="absolute left-4 top-6 -translate-y-1/2"
        style={{ color: color, fontSize: 22 }}
        fontSize="small"
      />

      {/* Input */}
      <input
        type="search"
        placeholder="Search..."
        className="
          w-full pl-11 pr-4 py-3
          rounded-full border
          text-sm lg:text-md
          focus:outline-none
          bg-white
        "
        style={{
          borderColor: color,
        }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onFocus={(e) => {
          e.target.style.boxShadow = `0 0 0 2px ${color}33`;
          e.target.style.borderColor = color;
        }}
        onBlur={(e) => {
          e.target.style.boxShadow = "none";
        }}
      />
    </div>
  );
};

export default Searchbar;
