import React, { useState } from "react";
import InputFields from "../../components/InputFields";

const TeamForm = ({ isOpen, onClose, onSubmit }) => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    post: "",
    image: "",
  });

  // Errors state (LOGIN jaisa)
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, type, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: type === "file" ? URL.createObjectURL(files[0]) : value,
    });

    // clear error while typing
    setErrors({ ...errors, [name]: "" });
  };

  // Validation function (same pattern as login)
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.post.trim()) newErrors.post = "Post is required";
    if (!formData.image) newErrors.image = "Image is required";
    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Send data to parent
    onSubmit(formData);

    // Reset form
    setFormData({ name: "", post: "", image: "" });
    setErrors({});
  };

  // Do not render form if not open
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-500">
      <div className="bg-white rounded-xl p-6 w-full max-w-md relative shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-lg"
        >
          ✕
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-gray-800">
          Add New Member
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4"> 
          {/* Image Upload */}
          <div>
            <label className="block text-sm font-medium mb-2">Image</label>

            <div
              onClick={() => document.getElementById("imageUpload").click()}
              className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition
                ${
                  errors.image
                    ? "border-red-500 bg-red-50"
                    : "border-[#249b56] bg-purple-50 hover:bg-[#c2f5d7]"
                }`}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="bg-[#249b56] text-white p-4 rounded-full">
                  ⬆️
                </div>

                <p className="text-blue-700 font-semibold">
                  Click to upload{" "}
                  <span className="text-gray-500">or drag & drop</span>
                </p>

                <p className="text-xs text-gray-500">JPG, PNG (max 5MB)</p>
              </div>

              {/* Hidden File Input */}
              <input
                id="imageUpload"
                type="file"
                name="image"
                onChange={handleChange}
                className="hidden"
              />
            </div>

            {errors.image && (
              <p className="text-red-500 text-sm mt-1">{errors.image}</p>
            )}

            {/* Image Preview */}
            {formData.image && (
              <div className="mt-4 relative">
                <img
                  src={formData.image}
                  alt="Preview"
                  className="w-full h-40 object-cover rounded-xl"
                />
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, image: "" })}
                  className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-1"
                >
                  ✕
                </button>
              </div>
            )}
          </div>

          {/* Full Name */}
          <div>
            <InputFields
              label="Full Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
            />
      
          </div>

          {/* Post */}
          <div>
            <InputFields
              label="Post"
              type="text"
              name="post"
              value={formData.post}
              onChange={handleChange}
              error={errors.post}
            />

          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-50 bg-[#249b56] cursor-pointer text-white py-2 rounded-lg mt-3 hover:bg-[#094522] transition"
            >
              Add Member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamForm;
