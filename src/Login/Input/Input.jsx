import React from "react";
import css from "./Input.scss";

const Input = ({ type, setInput, placeholder, input }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(input) => setInput(input.target.value)}
        className="input"
      />
    </div>
  );
};

export default Input;
