import React, { useContext, useState } from "react";
import InputFields from "../components/InputFields";
import { StudentContext } from "../context/StudentContext";

const initialFormState = {
  username: "",
  gender: "",
  dob: "",
  phone: "+91 ",
  email: "",
  status: "active",
};

const AddUserInboxForm = ({ onClose }) => {
  const { addUser } = useContext(StudentContext);
  const [userdataform, setUserDataForm] = useState(initialFormState);

  const [errors, setErrors] = useState({});

  //  ONLY update input values
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      // +91 remove hone se roke
      if (!value.startsWith("+91 ")) return;
    }

    setUserDataForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  //form validation errror handling
  const validateError = () => {
    const newError = {};

    if (!userdataform.username) {
      newError.username = "Name is required";
    }

    if (!userdataform.gender) {
      newError.gender = "Gender is required";
    }

    if (!userdataform.dob) {
      newError.dob = "Date of birth is required";
    } else if (new Date(userdataform.dob) > new Date()) {
      newError.dob = "Date of birth cannot be in future";
    }

    if (userdataform.phone.trim().length <= 4) {
      newError.phone = "Phone number is required";
    }

    if (!userdataform.email) {
      newError.email = "Email is required";
    }

    return newError;
  };

  //  SUBMIT form here
  const handleSubmit = (e) => {
    e.preventDefault();

    const err = validateError();

    if (Object.keys(err).length > 0) {
      setErrors(err);
      return;
    }

    addUser(userdataform);
    setUserDataForm(initialFormState);
    setErrors({});
    onClose();
  };

  return (
    <div
      
      className="max-w-3xl w-full py-3 px-6 bg-gray-100 rounded-xl shadow-md
                absolute left-1/2 top-1/2
                -translate-x-1/2 -translate-y-1/2 bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      {/* Cross button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-6 text-gray-500 hover:text-gray-800 font-bold text-3xl"
      >
        ×
      </button>

      <h2 className="text-2xl mt-2 font-semibold mb-6 text-gray-700">
        User Registration Form
      </h2>

      <form
        onSubmit={handleSubmit}
        className=" md:py-3 grid grid-cols-1 md:grid-cols-2 gap-5  overflow-y-auto"
      >
        {/* Username */}
        <InputFields
          label="Username"
          name="username"
          value={userdataform.username}
          onChange={handleChange}
          error={errors.username}
        />

        {/* Gender */}
        <div>
          <label className="text-sm font-medium text-gray-700">Gender</label>
          <select
            name="gender"
            value={userdataform.gender}
            onChange={handleChange}
            className="w-full border bg-white border-gray-400 rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {errors.gender && (
            <p className="text-red-500 text-sm mt-1">{errors.gender}</p>
          )}
        </div>

        {/* DOB */}
        <InputFields
          label="DOB"
          type="date"
          name="dob"
          value={userdataform.dob}
          onChange={handleChange}
          error={errors.dob}
        />

        {/* Phone */}
        <InputFields
          label="Phone"
          type="tel"
          name="phone"
          value={userdataform.phone}
          onChange={handleChange}
          maxLength={14}
          error={errors.phone}
        />

        {/* Email */}
        <InputFields
          label="Email"
          type="email"
          name="email"
          value={userdataform.email}
          onChange={handleChange}
          error={errors.email}
        />

        {/* Status */}
        <div>
          <label className="text-sm font-medium text-gray-700">Status</label>
          <select
            name="status"
            value={userdataform.status}
            onChange={handleChange}
            className="w-full border border-gray-400 bg-white rounded-lg px-3 py-2 text-sm"
          >
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          {errors.status && (
            <p className="text-red-500 text-sm mt-1">{errors.status}</p>
          )}
        </div>

        {/* Footer */}
        <div className="md:col-span-2 flex justify-end gap-3">
          <button
            type="button"
            className="px-4 py-2 border rounded-lg"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Add Member
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUserInboxForm;
