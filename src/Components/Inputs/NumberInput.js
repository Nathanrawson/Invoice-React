import React from "react";

const NumberInput = ({ label, name, value, onChange }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="number"
        className="form-control"
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default NumberInput;
