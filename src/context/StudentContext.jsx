import { createContext, useState } from "react";

import students from "../data/Students";

export const StudentContext = createContext();

const StudentProvider = ({ children }) => {
  const [studentuser, setStudentUser] = useState(students);

  const addUser = (data) => {
    const newUserr = {
      id: studentuser.length + 1,
      name: data.username,
      gender: data.gender,
      dob: data.dob,
      phone: data.phone,
      email: data.email,
      status: data.status === "active" ? "Active" : "Inactive",
    };

    setStudentUser((prev)=> [...prev, newUserr])
  };

  return (
    <StudentContext.Provider value={{ studentuser, setStudentUser, addUser }}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentProvider