import React from "react";

const Card = ({ children, className }) => {
  return (
    <div
      className={`${className} bg-white shadow-all rounded-md justify-center p-8`}
    >
      {children}
    </div>
  );
};

export default Card;
