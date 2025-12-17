import React, { useState } from "react";
import InputFields from "../components/InputFields";
import CreateIcon from "@mui/icons-material/Create";

const initialFormState = {
  name: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  role: "",
  agree: false,
  image: null,
};


const roles = [
  "Admin",
  "Sub Admin",
  "Vendor",
  "Editor",
  "User",
];

const Formm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState(initialFormState);
  const [preview, setPreview] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setPreview(file ? URL.createObjectURL(file) : null);
    } else {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Value:", formData);

    // Clean image memory
    if (preview) {
      URL.revokeObjectURL(preview);
    }

    // Reset form state and image preview
    setFormData(initialFormState);
    setPreview(null);
  };

  // roles func
   const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);

  const filteredRoles = roles.filter((role) =>
    role.toLowerCase().includes(search.toLowerCase())
  );

  const handleSelect = (role) => {
    setFormData({ ...formData, role });
    setSearch(role);
    setOpen(false);
  };


  return (
    <div className="fixed py-20 inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-lg shadow-xl w-[600px] h-[500px] flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b">
          <h2 className="text-xl font-semibold">Add New User</h2>
          <button onClick={onClose} className="text-xl cursor-pointer">
            ✕
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 px-6 py-4 overflow-y-auto"
        >
          {/* Image Upload */}
          <div className="flex items-center gap-4">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-20 h-20 rounded-full object-cover border"
              />
            ) : (
              <div className="w-20 h-20 rounded-full border flex items-center justify-center text-sm text-gray-400 relative">
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  value="" // Important: Reset input after submit
                  onChange={handleChange}
                  className="absolute inset-0 opacity-0 cursor-pointer"
                />
                <CreateIcon className="text-gray-400 text-xl cursor-pointer" />
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              name="image"
              value="" // Important: Reset input after submit
              onChange={handleChange}
              className="text-sm"
            />
          </div>

          {/* Name */}
          <InputFields
            label="Full Name"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Gender */}
          <div>
            <p className="text-sm font-medium text-gray-700 mb-1">Gender</p>
            <div className="flex gap-4">
              {["Male", "Female", "Other"].map((g) => (
                <label key={g} className="flex items-center gap-1 text-sm">
                  <input
                    type="radio"
                    name="gender"
                    value={g}
                    checked={formData.gender === g}
                    onChange={handleChange}
                  />
                  {g}
                </label>
              ))}
            </div>
          </div>

          {/* Date of Birth */}
          <InputFields
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          {/* Phone Number */}
          <InputFields
            label="Phone Number"
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          {/* Email */}
          <InputFields
            label="Email Address"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          {/* Role */}
          {/* <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="border rounded-md px-3 py-2 text-sm"
            >
              <option value="">Select Role</option>
              <option value="SubAdmin">Sub Admin</option>
              <option value="Vendor">Vendor</option>
            </select>
          </div> */}

          {/* Role */}
          <div className="relative flex flex-col gap-1">
      <label className="text-sm font-medium text-gray-700">Role</label>

      <input
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setOpen(true);
        }}
        onClick={() => setOpen(true)}
        placeholder="Search role..."
        className="border rounded-md px-3 py-2 text-sm"
      />

      {open && (
        <ul className="absolute top-full mt-1 w-full bg-white border rounded-md shadow max-h-40 overflow-y-auto z-10">
          {filteredRoles.length > 0 ? (
            filteredRoles.map((role) => (
              <li
                key={role}
                onClick={() => handleSelect(role)}
                className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
              >
                {role}
              </li>
            ))
          ) : (
            <li className="px-3 py-2 text-sm text-gray-400">
              No role found
            </li>
          )}
        </ul>
      )}
    </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition mt-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Formm;
