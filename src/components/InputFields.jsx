import React from 'react';

const InputFields = ({ label, type, name, value, onChange, required }) => {
  return (
    <div className="mb-2">
      <label className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>

     <div>
       <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      
     </div>
    </div>
  );
};

export default InputFields;
