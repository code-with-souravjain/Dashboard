import React, { useState } from "react";
import ExpandableText from "../../components/ExpandableText";
import { Delete, EditBtn, ViewBtn } from "../../utilities/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate } from "react-router-dom";

const TableList = ({ students, genderFilter, setGenderFilter }) => {

  const navigate = useNavigate()
   const handleView = (id) => {
    // Navigate to the nested user details page
    navigate(`/admin/user/${id}`);
  };

  const [activeRow, setActiveRow] = useState(null);

  const handleDotPopup = (id) => {
    setActiveRow(activeRow === id ? null : id);
  };

  return (
    <div className="overflow-x-auto max-w-full">
      <div className="max-h-[70vh] overflow-y-auto">
        <table className="min-w-full bg-white shadow-lg border-collapse">
          <thead className="text-left">
            <tr>
              <th className="sticky top-0 z-30 bg-zinc-800 text-white p-3">
                SNo.
              </th>
              <th className="sticky top-0 z-30 bg-zinc-800 text-white p-3">
                UserName
              </th>
              <th className="sticky top-0 z-30 bg-zinc-800 text-white p-3">
                <select
                  value={genderFilter}
                  onChange={(e) => setGenderFilter(e.target.value)}
                  className="bg-zinc-800 border text-white rounded px-2 py-1 focus:outline-none "
                >
                  <option value="All">All</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </th>

              <th className="sticky top-0 z-30 bg-zinc-800 text-white p-3">
                DOB
              </th>
              <th className="sticky top-0 z-30 bg-zinc-800 text-white p-3">
                Phone
              </th>
              <th className="sticky top-0 z-30 bg-zinc-800 text-white p-3">
                Email
              </th>
              <th className="sticky top-0 z-30 bg-zinc-800 text-white p-3">
                Status
              </th>
              <th className="sticky top-0 z-30 bg-zinc-800 text-white p-3">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {students.map((student, index) => (
              <tr
                key={student.id}
                className={index % 2 === 0 ? "bg-gray-100" : ""}
              >
                <td className="p-3">{student.id}</td>

                <td className="p-3">
                  <ExpandableText text={student.name} width="140px" />
                </td>

                <td className="p-3">{student.gender}</td>
                <td className="p-3">{student.dob}</td>

                <td className="p-3 whitespace-nowrap text-sm">
                  <span>{student.phone}</span>
                </td>

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

                <td className="p-3 text-center relative">
                  <button
                    className="p-2 rounded-full cursor-pointer hover:bg-gray-200 text-gray-800"
                    onClick={() => handleDotPopup(student.id)}
                  >
                    <MoreVertIcon />
                  </button>

                  {activeRow === student.id && (
                    <div className="absolute right-6 top-10 w-32 bg-white shadow-lg rounded-md z-50">
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-100">
                        <EditBtn />
                      </button>
                      <button
                        className="w-full px-4 py-2 text-left hover:bg-gray-100"
                       onClick={() => handleView(student.id)}
                      >
                        <ViewBtn />
                      </button>
                      <button className="w-full px-4 py-2 text-left hover:bg-gray-100 text-red-600">
                        <Delete />
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
