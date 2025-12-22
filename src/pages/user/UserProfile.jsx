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
      <div className="bg-white rounded-2xl border p-6 flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-20 h-20 border rounded-full overflow-hidden flex items-center justify-center">
                <AccountCircleIcon fontSize="large" />

            </div>
            {/* File input overlay */}
            <input
              type="file"
              accept="image/*"
              // onChange={handlePhotoChange}
              className="absolute inset-0 opacity-0 cursor-pointer w-20 h-20 rounded-full"
              title="Upload Photo"
            />
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {user.firstName} {user.lastName}
            </h2>
            <p className="text-sm text-gray-500">
              {user.role} | {user.location}
            </p>
          </div>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex items-center gap-7">
          <Icons
            instagram={user.instagram}
            linkedin={user.linkedin}
            whatsapp={user.whatsapp}
          />
          <ProfileEditBtn />
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
