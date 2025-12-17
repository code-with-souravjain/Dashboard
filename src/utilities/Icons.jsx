import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const Icons = ({ instagram, linkedin, whatsapp }) => {
  return (
    <div className="flex gap-3">
      {instagram && (
        <a
          href={instagram}
          target="_blank"
          rel="noreferrer"
          className="p-3 border rounded-full hover:bg-pink-600 hover:text-white"
        >
          <InstagramIcon />
        </a>
      )}

      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="p-3 border rounded-full hover:bg-blue-600 hover:text-white"
        >
          <LinkedInIcon />
        </a>
      )}

      {whatsapp && (
        <a
          href={`https://wa.me/${whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="p-3 border rounded-full hover:bg-green-600 hover:text-white"
        >
          <WhatsAppIcon />
        </a>
      )}
    </div>
  );
};

export default Icons;
