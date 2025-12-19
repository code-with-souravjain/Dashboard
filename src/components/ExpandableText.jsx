import React, { useState } from "react";

const ExpandableText = ({ text, width = "200px" }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ maxWidth: width }}>
      {/* SHORT TEXT */}
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-gray-800"
        style={{
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        title={text}   // ✅ HOVER par full name
      >
        {text}
      </div>

      {/* EXPAND BELOW */}
      {open && (
        <div
          className="mt-2 bg-gray-50 border border-gray-200 rounded-md p-2 text-sm text-gray-700"
          style={{
            maxWidth: width,
            wordBreak: "break-word",
          }}
        >
          {text}

          <div className="text-right mt-1">
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
