import React, { useState } from "react";
import Button, { DownloadBtn } from "../../utilities/Button";
import Formm from "../../components/Formm";
import DemoPagination from "../../utilities/DemoPagination";
import Students from "../../data/Students";
import Searchbar from "./Searchbar";
import TableList from "./TableList";

const InboxTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;

  const [genderFilter, setGenderFilter] = useState("All");

  // Filter based on search
const searchFiltered = Students.filter(
  (student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.phone.includes(searchTerm)
);

// Filter by gender
const filteredStudents =
  genderFilter === "All"
    ? searchFiltered
    : searchFiltered.filter((student) => student.gender === genderFilter);

// Pagination slice
const lastIndex = currentPage * dataPerPage;
const firstIndex = lastIndex - dataPerPage;
const paginatedStudents = filteredStudents.slice(firstIndex, lastIndex);

// Total pages
const totalPages = Math.ceil(filteredStudents.length / dataPerPage);


  return (
    <>
      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-3">
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="flex flex-row gap-3">
          <DownloadBtn Download="Download Report" />
          <Button Btntext="Add User" onClick={() => setIsOpen(true)} />
        </div>
      </div>

      {/* Table */}
      <TableList
        students={paginatedStudents}
        genderFilter={genderFilter}
        setGenderFilter={setGenderFilter}
      />

      {/* Pagination */}
      <DemoPagination
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {/* Popup */}
      <Formm isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default InboxTable;
