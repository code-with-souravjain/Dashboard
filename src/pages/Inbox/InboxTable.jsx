import React, { useState } from "react";
import ExpandableText from "../../components/ExpandableText";
import Button, {
  Delete,
  DownloadBtn,
  EditBtn,
  ViewBtn,
} from "../../utilities/Button";
import Formm from "../../components/Formm";
import DemoPagination from "../../utilities/DemoPagination";
import Students from "../../data/Students";
import Searchbar from "./Searchbar";
// import Filters from "../../components/Filters";

const InboxTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const filterStudents = Students.filter((student) => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone.toLowerCase().includes(searchTerm)
    );
  });

  /* ================= Pagination Logic ================= */
  // pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;

  // ✅ index calculation FIRST
  const lastIndex = currentPage * dataPerPage; // 1* 10 = 10
  const firstIndex = lastIndex - dataPerPage; // 10 -10 = 0

  // ✅ THEN slice
  const paginatedStudents = filterStudents.slice(firstIndex, lastIndex);

  // total pages
  const totalPages = Math.ceil(Students.length / dataPerPage);

  /* =================================================== */

  const [genderFilter, setGenderFilter] = useState("All");

  const filterFunc = () => {
    if (genderFilter === "All") {
      return paginatedStudents;
    }
    return paginatedStudents.filter(
      (student) => student.gender === genderFilter
    );
  };

  const filteredStudents = filterFunc();

  return (
    <>
      {/* search input and two  */}
      <div className="flex flex-col lg:flex-row justify-between gap-5 mb-3">
        <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="flex flex-row gap-3">
          {/* <Filters
            genderFilter={genderFilter}
            setGenderFilter={setGenderFilter}
          /> */}
          <DownloadBtn Download="Download Report" />
          <Button Btntext="Add User" onClick={() => setIsOpen(true)} />
        </div>
      </div>

      {/* table input */}
      <div className="overflow-x-auto max-w-full">
        <table className="min-w-full bg-white shadow-lg">
          <thead className="bg-zinc-800 text-white text-sm">
            <tr>
              <th className="p-3">SNo.</th>
              <th className="p-3">UserName</th>
              <th className="p-3">
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="bg-zinc-800 text-white border border-gray-500 rounded px-2 py-1 text-sm outline-none"
                >
                  <option value="All">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </th>

              <th className="p-3">DOB</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Email</th>
              <th className="p-3">Status</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.map((student, index) => (
              <tr
                key={student.id}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="p-3">{student.id}</td>

                <td className="p-3">
                  <ExpandableText text={student.name} width="180px" />
                </td>

                <td className="p-3">{student.gender}</td>
                <td className="p-3">{student.dob}</td>
                <td className="p-3">{student.phone}</td>

                <td className="p-3">
                  <ExpandableText text={student.email} width="220px" />
                </td>

                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm ${
                      student.status === "Active"
                        ? "bg-green-500"
                        : "bg-red-500"
                    }`}
                  >
                    {student.status}
                  </span>
                </td>

                <td className="p-3 flex gap-2">
                  <EditBtn />
                  <ViewBtn />
                  <Delete />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
