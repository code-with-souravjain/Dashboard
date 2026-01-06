import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Icons from "../../utilities/Icons";
import { ProfileEditBtn } from "../../utilities/Button";

const UserProfile = () => {
  // const [profilePhoto, setProfilePhoto] = useState(null);

  // const handlePhotoChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       setProfilePhoto(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const user = {
    firstName: "Sourav",
    lastName: "Jain",
    role: "Super Admin",
    location: "Chandigarh, India",
    email: "admin@gmail.com",
    phone: "+91 1234569878",
    bio: "CEO [Head]",
    country: "India",
    city: "Chandigarh",
    postalCode: "160017",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com/",
    whatsapp: "1234569878",
  };

  return (
    <div className="px-4">
      <h1 className="text-lg md:text-2xl font-semibold mb-6">Profile</h1>

      {/* PROFILE HEADER */}
      <div className="bg-white rounded-2xl border p-6 mb-6">
        <div
          className="flex flex-col gap-6 
                  sm:flex-row sm:items-center sm:justify-between"
        >
          {/* LEFT SIDE */}
          <div
            className="flex flex-col items-center text-center gap-4
                    sm:flex-row sm:items-center sm:text-left"
          >
            {/* PROFILE IMAGE */}
            <div className="relative">
              <div
                className="w-20 h-20 border rounded-full overflow-hidden 
                        flex items-center justify-center"
              >
                <AccountCircleIcon fontSize="large" />
              </div>

              {/* File input overlay */}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer 
                     w-20 h-20 rounded-full"
                title="Upload Photo"
              />
            </div>

            {/* USER INFO */}
            <div>
              <h2 className="text-xl font-semibold">
                {user.firstName} {user.lastName}
              </h2>
              <p className="text-sm text-gray-500">
                {user.role} | {user.location}
              </p>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div
            className="flex flex-wrap items-center justify-center 
                    gap-5 sm:justify-end"
          >
            <Icons
              instagram={user.instagram}
              linkedin={user.linkedin}
              whatsapp={user.whatsapp}
            />
            <ProfileEditBtn />
          </div>
        </div>
      </div>

      {/* PERSONAL INFORMATION */}
      <div className="bg-white rounded-2xl border p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Personal Information</h3>
          <ProfileEditBtn />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-500">First Name</p>
            <p className="font-medium">{user.firstName}</p>
          </div>

          <div>
            <p className="text-gray-500">Last Name</p>
            <p className="font-medium">{user.lastName}</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="font-medium">{user.email}</p>
          </div>

          <div>
            <p className="text-gray-500">Phone</p>
            <p className="font-medium">{user.phone}</p>
          </div>

          <div>
            <p className="text-gray-500">Bio</p>
            <p className="font-medium">{user.bio}</p>
          </div>
        </div>
      </div>

      {/* ADDRESS */}
      <div className="bg-white rounded-2xl border p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Address</h3>
          <ProfileEditBtn />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-gray-500">Country</p>
            <p className="font-medium">{user.country}</p>
          </div>

          <div>
            <p className="text-gray-500">City / State</p>
            <p className="font-medium">{user.city}</p>
          </div>

          <div>
            <p className="text-gray-500">Postal Code</p>
            <p className="font-medium">{user.postalCode}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
