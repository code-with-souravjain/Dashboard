import React, { useState } from "react";

const ExpandableText = ({ text, width = "400px", limit }) => {
  const [open, setOpen] = useState(false);

  // Check if text should truncate
  const isTruncated = text.length > limit;

  return (
    <>
      {/* SHORT TEXT */}
      <div
        onClick={() => isTruncated && setOpen(true)}
        className={`text-gray-800 ${
          isTruncated ? "cursor-pointer" : "cursor-default"
        }`}
        style={{
          maxWidth: width,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
        title={isTruncated ? "Click to view full text" : ""}
      >
        {text}
      </div>

      {/* POPUP */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30"
          onClick={() => setOpen(false)} 
        >
          <div
            className="bg-white rounded-md shadow-lg px-4 py-3 max-w-sm"
          >
            <div className="flex justify-between items-start gap-3">
              <div className="text-gray-800 break-words">
                {text}
              </div>

              <button
                onClick={() => setOpen(false)}
                className="text-red-500  font-semibold hover:text-gray-700 cursor-pointer "
              >
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExpandableText;
