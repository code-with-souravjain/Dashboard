import React from "react";
// import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
// import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Footer = () => {
  return (
    <footer className="bg-[#1976d2] text-white py-10 px-6 md:px-16">

      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Left Section */}
        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="text-gray-300 mt-4 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus quasi perspiciatis voluptatum, facilis cum, similique incidunt at accusamus, animi voluptas reiciendis. Provident doloremque accusantium doloribus voluptatem magnam minima pariatur error. Praesentium nemo beatae nihil aut.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <div className="w-10 h-10 bg-white-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-white-400">
              <FacebookIcon />
            </div>
            <div className="w-10 h-10 bg-white-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-white-400">
              <InstagramIcon />
            </div>
            <div className="w-10 h-10 bg-white-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-white-400">
              <XIcon />
            </div>
            <div className="w-10 h-10 bg-white-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-white-400">
              <LinkedInIcon />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="md:pl-10">
          <h3 className="text-xl font-semibold">Our Services</h3>
          <div className="w-20 h-[2px] bg-gray-500 mt-1"></div>

          <div className="grid grid-cols-2 gap-x-5 gap-y-2 mt-5 text-gray-300">
            <p>• Events</p>
            <p>• Product</p>
            <p>• Brand Documentary</p>
            <p>• Wedding</p>
            <p>• Drone</p>
            <p>• Awareness Videos</p>
            <p>• Documentary Films</p>
            <p>• Promotional Videos</p>
            <p>• Tutorial Videos</p>
            <p>• Animation</p>
            <p>• Interviews</p>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl font-semibold">Keep In Touch</h3>
          <div className="w-24 h-[2px] bg-gray-500 mt-1"></div>

          <div className="mt-6 space-y-5">
            <div className="flex gap-4">
              <EmailIcon className="text-white-500 text-2xl" />
              <div>
                <h4 className="font-semibold">Mail Us</h4>
                <p className="text-gray-300">dash@example.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <PhoneInTalkIcon className="text-white-500 text-2xl" />
              <div>
                <h4 className="font-semibold">Contact Number</h4>
                <p className="text-gray-300">+01 (12365447896)</p>
              </div>
            </div>

            <div className="flex gap-4">
              <LocationOnIcon className="text-white-500 text-2xl" />
              <div>
                <h4 className="font-semibold">Our Location</h4>
                <p className="text-gray-300 leading-6">
                  99, Videozilla address here example address dummy, Australia
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
