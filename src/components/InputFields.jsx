import React from 'react';

const InputFields = ({ label, name, value, onChange, type, error, maxLength }) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type || "text"}  
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full border rounded-lg px-3 py-2 text-sm ${
          error && "border-red-500 focus:ring-red-500"}`}
        maxLength={maxLength} 
      />
      {error && 
      <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};


export default InputFields;

