import React from "react";
import "./Input.scss";

const Input = ({ type, setInput, placeholder, input, value }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        placeholder={placeholder}
        onChange={(input) => setInput(input.target.value)}
        value={value}
        className="input"
      />
    </div>
  );
};

export default Input;
