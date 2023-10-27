// TextInput.jsx
import React from "react";

const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-3">
      <label className="form-label">
        {label}
        {required ? " *" : ""}:
      </label>

      <input
        type="text"
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
