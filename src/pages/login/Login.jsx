import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Clear the error as user types
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // fake token generate bcz we don't have backdend
    const fakeToken = "admin-token-2026"

    localStorage.setItem("authtoken", fakeToken)

    navigate("/admin", {replace: true}); // replace means after login user cannot back to loginpage with back btn

    console.log("Login data:", formData);
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4 relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-sm sm:max-w-md md:max-w-lg p-6 rounded-xl bg-white/60 backdrop-blur-lg border border-white/20 shadow-2xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-6 text-center">
          Login
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className={`w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 ${
                errors.email ? "border-red-500" : "focus:ring-blue-500"
              }`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              className={`w-full border px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 ${
                errors.password ? "border-red-500 focus:ring-red-500" : "focus:ring-blue-500"
              }`}
              value={formData.password}
              onChange={handleChange}
            />
            <div
              onClick={togglePassword}
              className="absolute right-3 top-[30px] cursor-pointer text-zinc-700"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 rounded-md bg-blue-600 hover:bg-blue-800 text-white font-semibold transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
