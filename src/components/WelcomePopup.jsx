// import { useEffect, useState } from "react";
// import RocketImage from "../images/welcome-rocket.png";
// import BackgroundImage from "../images/welcome-bg.png";

// const WelcomePopup = () => {
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const alreadyShown = localStorage.getItem("welcome_popup");

//     if (!alreadyShown) {
//       setShow(true);
//     }
//   }, []);

//   const handleClose = () => {
//     localStorage.setItem("welcome_popup", "true");
//     setShow(false);
//   };

//   if (!show) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
//       <div
//         className="relative w-[420px] rounded-2xl bg-white text-center shadow-xl"
//         style={{
//           backgroundImage: `url(${BackgroundImage})`,
//           backgroundSize: "cover",
//           backgroundPosition: "top",
//         }}
//       >
//         {/* Close button */}
//         <button
//           onClick={handleClose}
//           className="absolute right-4 top-4 text-gray-400 hover:text-black"
//         >
//           ✕
//         </button>

//         {/* Rocket */}
//         <img
//           src={RocketImage}
//           alt="rocket"
//           className="mx-auto -mt-16 w-28"
//         />

//         {/* Content */}
//         <div className="px-6 pb-6">
//           <h2 className="mt-4 text-2xl font-bold text-teal-700">
//             WELCOME! 👋
//           </h2>

//           <p className="mt-2 text-sm text-gray-600">
//             Start multipurpose, clean modern responsive admin template
//           </p>

//           {/* Pills */}
//           <div className="mt-4 flex flex-wrap justify-center gap-2">
//             {[
//               "Fully Responsive",
//               "Bootstrap 5",
//               "SCSS Support",
//               "Light & Dark Mode",
//             ].map((item) => (
//               <span
//                 key={item}
//                 className="rounded-full bg-teal-100 px-3 py-1 text-xs text-teal-700"
//               >
//                 {item}
//               </span>
//             ))}
//           </div>

//           {/* Button */}
//           <button
//             onClick={handleClose}
//             className="mt-6 w-full rounded-lg bg-teal-600 py-2 text-white hover:bg-teal-700"
//           >
//             Get Started →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default WelcomePopup;
