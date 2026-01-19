import React, { useContext, useState } from "react";
import Button, { DownloadBtn } from "../../utilities/Button";
import Formm from "../../components/Formm";
import DemoPagination from "../../utilities/DemoPagination";
import Searchbar from "./Searchbar";
import TableList from "./TableList";
import downloadStudentsPDF from "../../utilities/downloadStudentsPDF";
import { StudentContext } from "../../context/StudentContext";
import AddUserInboxForm from "../../components/AddUserInboxForm";

const InboxTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  // const dataPerPage = 10;
  const [dataPerPage, setDataPerPage] = useState(10);

  const [genderFilter, setGenderFilter] = useState("All");

  const { studentuser } = useContext(StudentContext);

  // Filter based on search
  const searchFiltered = studentuser.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone.includes(searchTerm),
  );

  // console.log("my seachdata:",searchFiltered)

  // Filter by gender
  const filteredStudents =
    genderFilter === "All"
      ? searchFiltered
      : searchFiltered.filter((student) => student.gender === genderFilter);

  // console.log("filter student :",filteredStudents)

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
          <DownloadBtn
            onClick={() => {
              console.log("PDF DATA:", filteredStudents);
              downloadStudentsPDF(filteredStudents);
            }}
            Download="Download Report"
          />
          {/* <Button Btntext="Add User" onClick={() => setIsOpen(true)} /> */}

          <button onClick={() => setIsOpen(true)} className="px-4 py-2 mb-4 bg-black text-white rounded-lg">
            Add New user
          </button>

          {isOpen && <AddUserInboxForm onClose={() => setIsOpen(false)} />}
        </div>
      </div>

      {/* Table */}
      <TableList
        // searchResults = {searchFiltered}
        students={paginatedStudents}
        genderFilter={filteredStudents}
        setGenderFilter={setGenderFilter}
      />

      {/* Pagination */}
      <div className="flex justify-end items-center ">
        <select
          value={dataPerPage}
          onChange={(e) => {
            setDataPerPage(Number(e.target.value));
          }}
          className="w-16 h-10 px-3 rounded-md mt-8 me-7 border-none text-md  bg-gray-300 text-md py-2"
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="25">25</option>
        </select>

        <DemoPagination
          totalPages={totalPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Popup */}
      {/* <Formm isOpen={isOpen} onClose={() => setIsOpen(false)} /> */}
    </>
  );
};

export default InboxTable;
