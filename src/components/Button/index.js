import React from "react";

const Button = ({ title }) => {
  return (
    <button className={`bg-[#7367f0] text-white font-medium p-2 my-2 rounded-md hover:shadow-xl  `}>
      {title}
    </button>
  );
};

export default Button;
