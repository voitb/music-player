import React from "react";

const ConfirmButton = ({ children, onClick }) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

export default ConfirmButton;
