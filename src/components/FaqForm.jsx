import React, { useState } from "react";
import Button, { NormalBtn } from "../utilities/Button";

const FaqForm = ({ onClose, onSubmit }) => {
  const [mytitle, setMytitle] = useState("");
  const [mydescription, setMydescription] = useState("");

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!mytitle.trim()) {
      newErrors.title = "Title is required";
    }

    if (!mydescription.trim()) {
      newErrors.description = "Description is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit({
      title: mytitle,
      description: mydescription,
    });

    setMytitle("");
    setMydescription("");
    setErrors({});
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="bg-white w-full max-w-lg rounded-xl shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">Add New FAQ</h2>
          <button
            onClick={onClose}
            className="text-red-500 font-semibold hover:text-red-800 text-xl"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Title
            </label>
            <input
              type="text"
              value={mytitle}
              onChange={(e) => {
                setMytitle(e.target.value);
                setErrors({ ...errors, title: "" });
              }}
              className={`w-full px-4 py-2 border rounded-lg ${
                errors.title ? "border-red-500" : ""
              }`}
              placeholder="Enter your FAQ title"
            />

            {errors.title && (
              <p className="text-red-500 text-sm mt-1">{errors.title}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Description
            </label>
            <textarea
              rows={6}
              value={mydescription}
              onChange={(e) => {
                setMydescription(e.target.value);
                setErrors({ ...errors, description: "" });
              }}
              className={`w-full px-4 py-2 border rounded-lg resize-none ${
                errors.description ? "border-red-500" : ""
              }`}
              placeholder="Enter your FAQ description"
            />

            {errors.description && (
              <p className="text-red-500 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-3">
            <NormalBtn type="button" onClick={onClose} normaltext="Cancel" />
            <Button type="submit" Btntext="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FaqForm;
