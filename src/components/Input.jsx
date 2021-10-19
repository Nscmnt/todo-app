import React from "react";
import "./Input.css";

const Input = ({ onKeyDown, onChange, value, light }) => {
  return (
    <div className="input-wrapper ">
      <input
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        className={`todo-input ${light && "light"}`}
        type="text"
        placeholder=" Create a new todo..."
        required
      />
    </div>
  );
};

export default Input;
