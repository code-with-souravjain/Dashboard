import React from "react";

const Searchbar = ({searchTerm, setSearchTerm}) => {
  return (
    <div className="w-full lg:w-auto">
      <input
        type="search"
        placeholder="Search here..."
        className="px-5 py-2 border rounded-md  text-sm lg:text-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default Searchbar;
