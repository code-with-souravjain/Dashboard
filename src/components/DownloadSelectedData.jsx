import React, { useState } from "react";

const initialFormState = {
  username: false,
  dob: false,
  phone: false,
  email: false,
  status: false,
  gender: {
    male: false,
    female: false,
    all: false,
  },
};

const DownloadSelectedData = ({ onClose }) => {
  const [selectedFields, setSelectedFields] = useState(initialFormState);

  const handleChange = (e) => {
    const { name, checked } = e.target;

    setSelectedFields((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const handleSubmit = (e)=>{
     e.preventDefault()
     console.log(selectedFields);
  }

  return (
    <div
      className="max-w-xl w-full py-10 px-10 bg-gray-100 rounded-xl shadow-md
                    absolute left-1/2 top-1/2
                    -translate-x-1/2 -translate-y-1/2"
    >
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-bold">Select Checkbox fields to Download Data</h1>

        <button onClick={onClose} className="cursor-pointer">
          ❌
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="flex gap-6">
          {/* Left column */}
          <div className="flex-1">
            <div>
              <input
                type="checkbox"
                id="username"
                name="username"
                checked={selectedFields.username}
                onChange={handleChange}
              />
              <label htmlFor="username" className="ms-2 text-sm">
                UserName
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="dob"
                name="dob"
                checked={selectedFields.dob}
                onChange={handleChange}
              />
              <label htmlFor="dob" className="ms-2 text-sm">
                DOB
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="phone"
                name="phone"
                checked={selectedFields.phone}
                onChange={handleChange}
              />
              <label htmlFor="phone" className="ms-2 text-sm">
                Phone
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="email"
                name="email"
                checked={selectedFields.email}
                onChange={handleChange}
              />
              <label htmlFor="email" className="ms-2 text-sm">
                Email
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="status"
                name="status"
                checked={selectedFields.status}
                onChange={handleChange}
              />
              <label htmlFor="status" className="ms-2 text-sm">
                Status
              </label>
            </div>
          </div>

          {/* Right column (Gender selection) */}
          <div className="flex-1">
            <h3 className="mb-1 font-semibold">Select Gender</h3>

            <div>
              <input
                type="checkbox"
                id="all"
                name="gender"
                checked={selectedFields.gender.all}
                onChange={handleChange}
              />

              <label htmlFor="all" className="ms-2 text-sm">
                All
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="male"
                name="gender"
                checked={selectedFields.gender.male}
                onChange={handleChange}
              />
              <label htmlFor="male" className="ms-2 text-sm">
                Male
              </label>
            </div>

            <div>
              <input
                type="checkbox"
                id="female"
                name="gender"
                checked={selectedFields.gender.female}
                onChange={handleChange}
              />
              <label htmlFor="female" className="ms-2 text-sm">
                Female
              </label>
            </div>
          </div>
        </div>

        {/* Submit button centered at the bottom */}
        <div className="mt-6 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default DownloadSelectedData;
