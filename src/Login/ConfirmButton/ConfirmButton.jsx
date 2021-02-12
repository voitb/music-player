import React from "react";
import css from "./ConfirmButton.scss";

const ConfirmButton = ({ children, onClick }) => {
  const onKeyPress = () => {
    console.log("XD");
  };
  return (
    <div className="button-wrapper">
      <button
        onClick={onClick}
        onKeyPress={() => onKeyPress()}
        className="button"
      >
        {children}
      </button>
    </div>
  );
};

export default ConfirmButton;
