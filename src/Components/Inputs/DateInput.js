import React from "react";

const DateInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-3">
      <label className="form-label">
        {label}
        {required ? " *" : ""}:
      </label>
      <input
        type="date"
        className="form-control"
        name={name}
        required={required}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default DateInput;
