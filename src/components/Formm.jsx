import React, { useState } from "react";
import InputFields from "../components/InputFields";
import CreateIcon from "@mui/icons-material/Create";

const initialFormState = {
  name: "",
  lastname: "",
  gender: "",
  dob: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  country: "",
  role: "",
  image: null,
};

const roles = ["Admin", "Sub Admin", "Vendor", "Editor", "User"]; 

const Formm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState(initialFormState);
  const [preview, setPreview] = useState(null);
  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const filteredRoles = roles.filter((role) =>
    role.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const file = files[0];
      setFormData({ ...formData, image: file });
      setPreview(file ? URL.createObjectURL(file) : null);
      setErrors({ ...errors, image: "" });
    } else {
      setFormData({ ...formData, [name]: value });
      setErrors({ ...errors, [name]: "" });
    }
  };

  const handleSelect = (role) => {
    setFormData({ ...formData, role });
    setSearch(role);
    setOpen(false);
    setErrors({ ...errors, role: "" });
  };
  
  // Validation function
  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "First name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";

    if (!formData.email) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address";

    if (!formData.phone) newErrors.phone = "Phone number is required";
    else if (!/^\d{10}$/.test(formData.phone))
      newErrors.phone = "Enter valid 10 digit phone number";

    if (!formData.dob) newErrors.dob = "Date of birth is required";
    else if (new Date(formData.dob) > new Date())
      newErrors.dob = "Date of birth cannot be in future";

    if (!formData.city.trim()) newErrors.city = "City is required";
    if (!formData.country.trim()) newErrors.country = "Country is required";

    if (!formData.address.trim()) newErrors.address = "Address is required";
    else if (formData.address.length < 10)
      newErrors.address = "Address should be at least 10 characters";

    if (!formData.gender) newErrors.gender = "Please select gender";
    if (!formData.role) newErrors.role = "Please select a role";

    if (!formData.interests || formData.interests.length === 0) {
      newErrors.interests = "Please select at least one interest";
    }

    if (!formData.image) newErrors.image = "Profile image is required";
    else {
      const allowedTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!allowedTypes.includes(formData.image.type))
        newErrors.image = "Only JPG or PNG images allowed";
      else if (formData.image.size > 5 * 1024 * 1024)
        newErrors.image = "Image size must be less than 5MB";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    if (Object.keys(err).length) {
      setErrors(err);
      return;
    }
    console.log(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-4xl px-4 rounded-lg shadow-xl overflow-hidden">
        {/* HEADER */}
        <div className="h-14 flex items-center justify-between px-6 border-b bg-white">
          <h2 className="text-xl font-semibold text-gray-800">Add User</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 text-lg"
          >
            ✕
          </button>
        </div>

        {/* BODY */}
        <form
          onSubmit={handleSubmit}
          className="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[75vh] overflow-y-auto"
        >
          {/* OTHER FIELDS */}
          <InputFields
            label="First Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={errors.name}
            maxLength={20}
          /> 

          <InputFields
            label="Last Name"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            error={errors.lastname}
            maxLength={20} 
          />
          <InputFields
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <InputFields
            label="Phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            error={errors.phone}
          />
          <InputFields
            label="Date of Birth"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            error={errors.dob}
          />
          <InputFields
            label="City"
            name="city"
            value={formData.city}
            onChange={handleChange}
            error={errors.city}
          />
          <div className="md:col-span-2">
            <label className="text-sm font-medium text-gray-700">Address</label>
            <textarea
             
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2 text-sm"
            />
            {errors.address && (
              <p className="text-xs text-red-500">{errors.address}</p>
            )}
          </div>

          {/* COUNTRY + ROLE */}
          <div className="flex flex-col md:flex-row gap-6 md:col-span-2">
            {/* COUNTRY */}
            <div className="flex-1">
              <label className="text-sm font-medium text-gray-700">
                Country
              </label>
              <input
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              {errors.country && (
                <p className="text-xs text-red-500 mt-1">{errors.country}</p>
              )}
            </div>

            {/* ROLE */}
            <div className="flex-1 relative">
              <label className="text-sm font-medium text-gray-700">Role</label>
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  setOpen(true);
                }}
                onClick={() => setOpen(true)}
                placeholder="Select role"
                className="w-full border rounded-lg px-3 py-2 text-sm"
              />
              {open && (
                <ul className="absolute w-full bg-white border rounded-lg shadow mt-1 z-20 max-h-40 overflow-y-auto">
                  {filteredRoles.map((r) => (
                    <li
                      key={r}
                      onClick={() => handleSelect(r)}
                      className="px-3 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                    >
                      {r}
                    </li>
                  ))}
                </ul>
              )}
              {errors.role && (
                <p className="text-xs text-red-500 mt-1">{errors.role}</p>
              )}
            </div>
          </div>

          {/* GENDER + IMAGE */}
          <div className="flex flex-col md:flex-row gap-6 md:col-span-2">
            {/* GENDER */}
            <div className="flex-1 rounded-lg p-4">
              <p className="text-sm font-medium text-gray-700 mb-2">Gender</p>
              <div className="flex gap-6 text-sm">
                {["Male", "Female", "Other"].map((g) => (
                  <label key={g} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="gender"
                      value={g}
                      checked={formData.gender === g}
                      onChange={handleChange}
                      className="w-3 h-3 mt-0.5"
                    />
                    {g}
                  </label>
                ))}
              </div>
              {errors.gender && (
                <p className="text-xs text-red-500 mt-1">{errors.gender}</p>
              )}

              {/* CHECKBOX OPTIONS */}
              <div className="md:col-span-2 mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Interests
                </p>
                <div className="flex gap-6 text-sm flex-wrap">
                  {["Sports", "Music", "Travel", "Reading"].map((interest) => (
                    <label key={interest} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="interests"
                        className="w-3 h-3 mt-0.5 flex-shrink-0"
                        value={interest}
                        checked={
                          formData.interests?.includes(interest) || false
                        }
                        onChange={(e) => {
                          const { checked, value } = e.target;
                          let updatedInterests = formData.interests || [];
                          if (checked) {
                            updatedInterests.push(value);
                          } else {
                            updatedInterests = updatedInterests.filter(
                              (i) => i !== value
                            );
                          }
                          setFormData({
                            ...formData,
                            interests: updatedInterests,
                          });
                        }}
                      />
                      {interest}
                    </label>
                  ))}
                </div>
              </div>
              {errors.interests && (
                <p className="text-xs text-red-500 mt-1">{errors.interests}</p>
              )}
            </div>

            {/* PROFILE IMAGE */}
            <div className="flex-1 border rounded-lg p-4 flex flex-col items-center justify-center">
              {!preview ? (
                <div
                  onClick={() => document.getElementById("imageUpload").click()}
                  className="border-2 border-dashed border-blue-400 rounded-xl p-6 text-center cursor-pointer bg-purple-50 hover:bg-purple-100 transition w-full"
                >
                  <div className="flex flex-col items-center gap-3">
                    <div className="bg-blue-600 text-white p-4 rounded-full">
                      ⬆️
                    </div>
                    <p className="text-blue-700 font-semibold">
                      Click to upload Profile Image
                    </p>
                    <p className="text-xs text-gray-500">JPG, PNG (max 5MB)</p>
                  </div>
                  <input
                    id="imageUpload"
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleChange}
                    className="hidden"
                  />
                </div>
              ) : (
                <div className="relative w-80 h-40">
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-xl border"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview(null);
                      setFormData({ ...formData, image: null });
                    }}
                    className="absolute -top-2 -right-2 bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center text-sm hover:bg-red-700"
                  >
                    ✕
                  </button>
                </div>
              )}
              {errors.image && (
                <p className="text-xs text-red-500 mt-1">{errors.image}</p>
              )}
            </div>
          </div>

          {/* FOOTER */}
          <div className="md:col-span-2 flex justify-end gap-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm border rounded-lg text-gray-600 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 text-sm rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formm;
