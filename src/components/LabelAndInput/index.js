import React from "react";

const LabelAndInput = ({ label, type }) => {
  return (
    <div className="w-80 flex flex-col gap-1">
      <label className="font-medium text-sm text-opacity-70 text-black">
        {label}
      </label>
      <input
        className="bg-white rounded-md p-2 border-[1px] border-gray-300 focus:border-[#7367f0] focus:outline-none text-sm text-gray-500"
        type={type}
      />
    </div>
  );
};

export default LabelAndInput;
