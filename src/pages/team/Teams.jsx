import React, { useEffect, useState } from "react";
import TeamForm from "./TeamForm";
import Button from "../../utilities/Button";

const Teams = () => {
  // State to show/hide form popup
  const [showForm, setShowForm] = useState(false);

  // State to store all team members
  const [teamMembers, setTeamMember] = useState([]);

  // Open form
  const handleTeamForm = () => {
    setShowForm(true);
  };

  // Add member 
const handleAddMember = (member) => {
  const updatedMembers = [...teamMembers, member];
  setTeamMember(updatedMembers);

  // Save to localStorage
  localStorage.setItem("teamMembers", JSON.stringify(updatedMembers));

  setShowForm(false);
};

  // Remove a member by index
  const handleRemoveMember = (index) => {
  const updatedMembers = teamMembers.filter((_, i) => i !== index);
  setTeamMember(updatedMembers);

  // Update localStorage
  localStorage.setItem("teamMembers", JSON.stringify(updatedMembers));
};

useEffect(() => {
  const savedMembers = localStorage.getItem("teamMembers");
  if (savedMembers) {
    setTeamMember(JSON.parse(savedMembers));
  }
}, []);

  return (
    <div className="px-6 py-4 min-h-[550px]">
      {/* Page Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-800">Team Members</h1>
          <p className="text-sm text-gray-500 mt-1">Manage your team and roles</p>
        </div>

        {/* Add Member Button */}
        {/* <button
          className="px-4 py-2 bg-[#249b56] text-white rounded-lg hover:bg-[#075327] transition cursor-pointer"
          onClick={handleTeamForm}
        >
          Add Member
        </button> */}

        <Button Btntext="Add Member" />
      </div>

      {/* Team Members Grid */}
   <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
  {teamMembers.map((member, index) => (
    <div
      key={index}
      className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition flex flex-col items-center relative"
    >
      {/* Remove Button */}
      <button
        onClick={() => handleRemoveMember(index)}
        className="absolute top-3 right-3 text-red-500 font-bold cursor-pointer"
      >
        ❌
      </button>

      {/* Profile Image */}
      {member.image && (
        <img
          src={member.image}
          alt={member.name}
          className="w-30 h-30 rounded-full object-cover border-3 border-gray-300"
        />
      )}

      {/* Name */}
      <h3 className="mt-4 text-lg font-semibold text-gray-800 text-center">
        {member.name}
      </h3>

      {/* Post / Role */}
      <p className="text-gray-500 text-sm mt-1 text-center">{member.post}</p>
    </div>
  ))}
</div>


      {/* Form Popup */}
      {showForm && (
        <TeamForm
          isOpen={showForm}
          onClose={() => setShowForm(false)}
          onSubmit={handleAddMember} // pass function to add member
        />
      )}
    </div>
  );
};

export default Teams;
