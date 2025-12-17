import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";


const Button = ({ Btntext, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="px-5 py-2 bg-red-700 text-white rounded-md cursor-pointer mb-4 text-sm lg:text-md"
      >
        {Btntext}
      </button>
    </>
  );
};

export const DownloadBtn = ({ Download }) => {
  return (
    <button className="px-5 py-2  bg-green-700 text-white rounded-md cursor-pointer mb-4 text-sm lg:text-md">
      {Download}
    </button>
  );
};

export const ViewBtn = () => {
  return (
    <button className="cursor-pointer px-3 hover:text-blue-400">
      <VisibilityIcon />
    </button>
  );
};

export const EditBtn = () => {
  return (
    <button className="cursor-pointer hover:text-yellow-600 sm:text-sm md:text-base">
      <EditIcon />
    </button>
  );
};

export const Delete = () => {
  return (
    <button className="cursor-pointer hover:text-red-700">
      <DeleteForeverIcon />
    </button>
  );
};

export const ProfileEditBtn = () => {
  return <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-gray-100 cursor-pointer">
      <EditIcon fontSize="small" />
      Edit
    </button>
};

export default Button;
