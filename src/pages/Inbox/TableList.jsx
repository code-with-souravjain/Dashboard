import React from "react";
import ExpandableText from "../../components/ExpandableText";
// import { Delete, EditBtn, ViewBtn } from "../../utilities/Button";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TableList = ({ students }) => {
  return (
    <div className="overflow-x-auto max-w-full">
      <table className="min-w-full bg-white shadow-lg">
        <thead className="bg-zinc-800 text-white text-sm">
          <tr className="text-left">
            <th className="p-3">SNo.</th>
            <th className="p-3">UserName</th>
            <th className="p-3">Gender</th>
            <th className="p-3">DOB</th>
            <th className="p-3">Phone</th>
            <th className="p-3">Email</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>

        <tbody className="text-[15px]" >
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
              <td className="p-3 whitespace-nowrap">{student.phone}</td>

              <td className="p-3">
                <ExpandableText text={student.email} width="200px" />
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

              {/* <td className="p-1 flex gap-1">
                <EditBtn />
                <ViewBtn />
                <Delete />
              </td> */}
              <td>
                <MoreVertIcon/>
                heello
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableList;

