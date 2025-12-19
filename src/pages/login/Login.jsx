import React, { useState,  } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    navigate("/");
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Card */}
      <div
        className="
          relative z-10 w-full 
          max-w-sm sm:max-w-md md:max-w-lg
          p-4 sm:p-6 md:p-8
          rounded-xl
          bg-white/60 backdrop-blur-lg
          border border-white/20
          shadow-2xl
        "
      >
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
              className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <label className="block text-sm font-medium mb-1">
              Password
            </label>
            <input
              className="w-full border px-4 py-2 pr-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="********"
              value={formData.password}
              onChange={handleChange}
              required
            />

            <div
              onClick={togglePassword}
              className="absolute right-3 top-[30px] cursor-pointer text-zinc-700"
            >
              {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full py-2 mt-4 rounded-md
              bg-blue-600 hover:bg-blue-800
              text-white font-semibold
              transition duration-300
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
