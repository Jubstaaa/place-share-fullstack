import React from "react";

function Card({ children }) {
  return (
    <div className="shadow-md rounded-md  overflow-hidden bg-white">
      {children}
    </div>
  );
}

export default Card;
