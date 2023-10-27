import React from "react";
import TextInput from "../Inputs/TextInput";

const ClientAddress = ({ invoiceData, handleInputChange }) => {
  const handleChange = (e) => handleInputChange(e, "ClientAddress");

  return (
    <div className="row">
      <div className="col-md-6 mb-3">
        <TextInput
          label="Name"
          name="Name"
          value={invoiceData?.ClientAddress?.Name || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="Line1"
          name="Line1"
          value={invoiceData?.ClientAddress?.Line1 || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="Line2"
          name="Line2"
          value={invoiceData?.ClientAddress?.Line2 || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="City"
          name="City"
          value={invoiceData?.ClientAddress?.City || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="County"
          name="County"
          value={invoiceData?.ClientAddress?.County || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="Country"
          name="Country"
          value={invoiceData?.ClientAddress?.Country || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6 mb-3">
        <TextInput
          label="Postcode"
          name="Postcode"
          value={invoiceData?.ClientAddress?.Postcode || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default ClientAddress;
