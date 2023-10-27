import React from "react";
import TextInput from "../Inputs/TextInput";

const CompanyAddress = ({ invoiceData, handleInputChange }) => {
  const handleChange = (e) => handleInputChange(e, "CompanyAddress");

  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <TextInput
          label="Name"
          name="Name"
          value={invoiceData?.CompanyAddress?.Name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="Line1"
          name="Line1"
          value={invoiceData?.CompanyAddress?.Line1 || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="Line2"
          name="Line2"
          value={invoiceData?.CompanyAddress?.Line2 || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="City"
          name="City"
          value={invoiceData?.CompanyAddress?.City || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="County"
          name="County"
          value={invoiceData?.CompanyAddress?.County || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="Country"
          name="Country"
          value={invoiceData?.CompanyAddress?.Country || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="Postcode"
          name="Postcode"
          value={invoiceData?.CompanyAddress?.Postcode || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default CompanyAddress;
