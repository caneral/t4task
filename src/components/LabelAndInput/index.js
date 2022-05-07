import React from "react";

const LabelAndInput = ({ label, type, hookform }) => {
  return (
    <div className="sm:w-80 flex flex-col gap-1">
      <label className="font-medium text-sm text-gray-500">{label}</label>
      <input
        {...hookform}
        className="bg-white rounded-md p-2 border-[1px] border-gray-300 focus:border-[#7367f0] focus:outline-none text-sm text-gray-500"
        type={type}
      />
    </div>
  );
};

export default LabelAndInput;
