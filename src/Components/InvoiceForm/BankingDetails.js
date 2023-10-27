import React from "react";
import TextInput from "../Inputs/TextInput";

const BankingDetails = ({ invoiceData, handleInputChange }) => {
  const handleChange = (e) => handleInputChange(e, "BankingDetails");

  return (
    <div className="row">
      <div className="col-md-6">
        <TextInput
          label="Bank Name"
          type="text"
          name="BankName"
          value={invoiceData?.BankingDetails?.BankName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <TextInput
          label="Account Name"
          type="text"
          name="AccountName"
          value={invoiceData?.BankingDetails?.AccountName || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <TextInput
          label="Routing Number"
          type="number"
          name="RoutingNumber"
          value={invoiceData?.BankingDetails?.RoutingNumber || ""}
          onChange={handleChange}
        />
      </div>
      <div className="col-md-6">
        <TextInput
          label="Account Number"
          type="number"
          name="AccountNumber"
          value={invoiceData?.BankingDetails?.AccountNumber || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default BankingDetails;
