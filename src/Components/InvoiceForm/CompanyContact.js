import React from "react";
import TextInput from "../Inputs/TextInput";

const CompanyContact = ({ invoiceData, handleInputChange }) => {
  const handleChange = (e) => handleInputChange(e, "CompanyContact");

  return (
    <div className="row">
      <div className="col-md-6">
        <TextInput
          label="Phone Number"
          type="tel"
          name="PhoneNumber"
          value={invoiceData?.CompanyContact?.PhoneNumber || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <TextInput
          label="Email"
          type="email"
          name="Email"
          value={invoiceData?.CompanyContact?.Email || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CompanyContact;
