import React from "react";

function Card({ children, className }) {
  return (
    <div
      className={`shadow-md rounded-md p-4 m-0 overflow-hidden bg-white ${className}`}
    >
      {children}
    </div>
  );
}

export default Card;
