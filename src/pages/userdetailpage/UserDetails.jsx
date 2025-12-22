import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import students from "../../data/Students";

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the student by id
  const student = students.find((s) => s.id === parseInt(id));

  if (!student) return <div>UserDetails not found</div>;

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-3 py-1 rounded bg-gray-200"
      >
        Back
      </button>

        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4 mx-auto flex items-center justify-center">
          
          <span className="text-gray-600">No Image</span>
        </div>


      <h1 className="text-2xl font-bold mb-4">{student.name}</h1>

      <p><strong>Gender:</strong> {student.gender}</p>
      <p><strong>DOB:</strong> {student.dob}</p>
      <p><strong>Phone:</strong> +91 {student.phone}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span className={student.status === "Active" ? "text-green-600" : "text-red-600"}>
          {student.status}
        </span>
      </p>
    </div>
  );
};

export default UserDetails;
