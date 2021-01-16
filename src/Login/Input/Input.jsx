import React from "react";

const Input = ({ type, setInput }) => {
  return (
    <div>
      <input type={type} onChange={(input) => setInput(input.target.value)} />
    </div>
  );
};

export default Input;
