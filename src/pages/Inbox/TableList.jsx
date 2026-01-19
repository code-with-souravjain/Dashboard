import React, { useContext, useState } from "react";
import ExpandableText from "../../components/ExpandableText";
import { Delete, EditBtn, ViewBtn } from "../../utilities/Button";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { ThemeColorContext } from "../../context/ThemeColorContext";
// import { StudentContext } from "../../context/StudentContext";


const TableList = ({ students, genderFilter, searchResults, setGenderFilter }) => {
  
  // console.log("value of gender", genderFilter);

  const [activeRow, setActiveRow] = useState(null);

  // const {studentuser} = useContext(StudentContext)

  const handleDotPopup = (id) => {
    setActiveRow(activeRow === id ? null : id);
  };

  const { color } = useContext(ThemeColorContext); 

  // const finalData =
  // searchResults && searchResults.length > 0
  //   ? searchResults 
  //   : genderFilter && genderFilter.length > 0 
  //   ? genderFilter
  //   :students

    // console.log("finalddata", finalData)
    

  return (
    <div className="overflow-x-auto md:overflow-x-hidden">
      <table
        id="my-table"
        className="w-full min-w-max md:min-w-full bg-white shadow-lg border-collapse"
      >
        <thead className="text-left">
          <tr>
            <th
              style={{ backgroundColor: color }}
              className="text-white p-2 text-xs md:text-sm"
            >
              SNo.
            </th>

            <th
              style={{ backgroundColor: color }}
              className="text-white p-2 text-xs md:text-sm"
            >
              UserName
            </th>

            <th
              style={{ backgroundColor: color }}
              className=" text-white p-2 text-xs md:text-sm"
            >
              <select
                
                onChange={(e) => setGenderFilter(e.target.value)}
                className=" border text-white rounded px-1 py-1 focus:outline-none text-xs md:text-sm"
                style={{ backgroundColor: color }}
              >
                <option value="All">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </th>
            <th
              style={{ backgroundColor: color }}
              className=" text-white p-2 text-xs md:text-sm"
            >
              DOB
            </th>
            <th
              style={{ backgroundColor: color }}
              className=" text-white p-2 text-xs md:text-sm"
            >
              Phone
            </th>
            <th
              style={{ backgroundColor: color }}
              className=" text-white p-2 text-xs md:text-sm"
            >
              Email
            </th>
            <th
              style={{ backgroundColor: color }}
              className=" text-white p-2 text-xs md:text-sm"
            >
              Status
            </th>
            <th
              style={{ backgroundColor: color }}
              className=" text-white p-2 text-xs md:text-sm"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {  students.map((student) => (
            <tr key={student.id} className="border-b border-gray-200 ">
              <td className="px-2 py-2 text-xs md:text-sm break-words">
                {student.id}
              </td>
              <td className="px-2 py-2 text-xs md:text-sm break-words">
                <ExpandableText text={student.name} width="140px" limit={18} />
              </td>
              <td className="px-2 py-2 text-xs md:text-sm break-words">
                {student.gender}
              </td>
              <td className="px-2 py-2 text-xs md:text-sm break-words">
                {student.dob}
              </td>
              <td className="px-2 py-2 text-xs md:text-sm break-words">
                {student.phone}
              </td>
              <td className="px-2 py-2 text-xs md:text-sm break-words">
                <ExpandableText text={student.email} width="160px" limit={20} />
              </td>
              <td className="px-2 py-1 text-xs md:text-sm">
                <span
                  className={`px-2 py-1 rounded-full text-white text-xs ${
                    student.status === "Active" ? "bg-green-700" : "bg-red-700"
                  }`}
                >
                  {student.status}
                </span>
              </td>
              <td className="px-2 py-1 text-xs md:text-sm text-center relative">
                <button
                  className="p-1 rounded-full cursor-pointer hover:bg-gray-200 text-gray-800"
                  onClick={() => handleDotPopup(student.id)}
                >
                  <MoreVertIcon fontSize="small" />
                </button>
                {activeRow === student.id && (
                  <div className="absolute right-6 top-8 w-32 bg-white shadow-lg rounded-md z-50">
                    <button className="w-full px-3 py-1 text-left hover:bg-gray-100 text-sm">
                      <EditBtn />
                    </button>
                    <button
                      className="w-full px-3 py-1 text-left hover:bg-gray-100 text-sm"
                      onClick={() => handleView(student.id)}
                    >
                      <ViewBtn />
                    </button>
                    <button className="w-full px-3 py-1 text-left hover:bg-gray-100 text-red-600 text-sm">
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
  );
};

export default TableList;
