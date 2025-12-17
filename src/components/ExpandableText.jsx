import React, { useState } from "react";

const ExpandableText = ({ text, width = "200px" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: width, position: "relative" }}>
      
      {/* SHORT TEXT */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-gray-800"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        title={text}
      >
        {text}
      </div>

      {/* EXPANDED BOX */}
      {open && (
        <div
          className="absolute z-50 mt-1 bg-white shadow-lg rounded-md p-3 text-sm text-gray-700"
          style={{
            width: width,
            maxHeight: "120px",
            overflowY: "auto",
            border: "1px solid #e5e7eb",
          }}
        >
          {text}

          {/* CLOSE */}
          <div className="text-right mt-2">
            <button
              onClick={() => setOpen(false)}
              className="text-blue-600 text-xs hover:underline"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpandableText;
